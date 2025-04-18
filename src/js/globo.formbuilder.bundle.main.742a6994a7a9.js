'use strict';
(self.webpackChunkgloboFormbuilder =
    self.webpackChunkgloboFormbuilder || []).push([
    [792],
    {
        8425: (e, t, o) => {
            o.r(t),
                o.d(t, {
                    default: () => u,
                });
            var r = o(8089);
            const a = o(9380),
                i = {
                    handleValidate: function (e) {
                        const t = this,
                            o = e.querySelector('.block-container');
                        if (!o) return;
                        let i = {};
                        const l = o.getAttribute('data-id');
                        (this.forms[l].errorMessage = Object.keys(
                            this.forms[l].errorMessage
                        ).reduce(
                            (e, t) => (
                                (e[t] = (0, r.pw)(
                                    this.forms[l].errorMessage[t]
                                )),
                                e
                            ),
                            {}
                        )),
                            o
                                .querySelectorAll('input, textarea, select')
                                .forEach(t => {
                                    const o =
                                            null !== t.getAttribute('presence'),
                                        r = null !== t.getAttribute('disabled'),
                                        a =
                                            null !==
                                                t.getAttribute('data-type') &&
                                            t.getAttribute('data-type'),
                                        s = t
                                            .closest('.globo-form-control')
                                            .querySelector('[data-label]'),
                                        n = {
                                            label: s
                                                ? s.getAttribute('data-label')
                                                : null,
                                        };
                                    if (
                                        ((i[t.name] = {}),
                                        r
                                            ? (i[t.name].ignore = {})
                                            : o &&
                                              ('products[]' == t.name
                                                  ? (i[t.name].presence = {
                                                        message:
                                                            this.forms[l]
                                                                .errorMessage
                                                                .requiredProducts,
                                                    })
                                                  : (i[t.name].presence = {
                                                        message: m(
                                                            this.forms[l]
                                                                .errorMessage
                                                                .required,
                                                            n
                                                        ),
                                                    })),
                                        'email' == a &&
                                            ((i[t.name][a] = {
                                                message: m(
                                                    this.forms[l].errorMessage
                                                        .invalidEmail,
                                                    n
                                                ),
                                            }),
                                            this.forms[l].publish
                                                ?.restrictedEmailDomains &&
                                                this.shop.pricing.features
                                                    .restrictedEmailDomains))
                                    ) {
                                        const e =
                                            this.forms[
                                                l
                                            ].publish.restrictedEmailDomains.split(
                                                ','
                                            );
                                        i[t.name].restrictedEmailDomains = {
                                            list: e,
                                            message: m(
                                                this.forms[l].errorMessage
                                                    .restrictedEmailDomains,
                                                n
                                            ),
                                        };
                                    }
                                    if (
                                        ('name' == a &&
                                            (i[t.name].format = {
                                                pattern: '^[ -.A-占�]+',
                                                flags: 's',
                                                message: m(
                                                    this.forms[l].errorMessage
                                                        .invalidName,
                                                    n
                                                ),
                                            }),
                                        'url' == a &&
                                            (i[t.name][a] = {
                                                message: m(
                                                    this.forms[l].errorMessage
                                                        .invalidURL,
                                                    n
                                                ),
                                            }),
                                        'phone' == a &&
                                            (null !== t.getAttribute('validate')
                                                ? null ===
                                                      t.getAttribute(
                                                          'onlyshowflag'
                                                      ) &&
                                                  (i[t.name].phone = {
                                                      message: m(
                                                          this.forms[l]
                                                              .errorMessage
                                                              .invalidPhone,
                                                          n
                                                      ),
                                                  })
                                                : (i[t.name].format = {
                                                      pattern:
                                                          '^[+]*[(]{0,1}[0-9+]{1,9}[)]{0,1}[-s.0-9 ]*$',
                                                      flags: 'i',
                                                      message: m(
                                                          this.forms[l]
                                                              .errorMessage
                                                              .invalidPhone,
                                                          n
                                                      ),
                                                  })),
                                        'file' == a || 'file2' == a)
                                    ) {
                                        let e =
                                            !1 !==
                                            this.shop.pricing.features
                                                .fileUpload
                                                ? 1024 *
                                                  this.shop.pricing.features
                                                      .fileUpload
                                                : 2048;
                                        const o = t.getAttribute(
                                            'data-file-size-limit'
                                        );
                                        o &&
                                            !isNaN(o) &&
                                            (e = 1024 * parseFloat(o)),
                                            (i[t.name].file = {
                                                notAllowedExtension: m(
                                                    this.forms[l].errorMessage
                                                        .fileNotAllowed,
                                                    n
                                                ),
                                                sizeLimitMessage: m(
                                                    this.forms[l].errorMessage
                                                        .fileSizeLimit,
                                                    n
                                                ),
                                                allowedExtension: t
                                                    .getAttribute(
                                                        'data-allowed-extensions'
                                                    )
                                                    .split(','),
                                                maxFileSize: e,
                                            });
                                    }
                                    if (
                                        ('checkbox' == a &&
                                            ((i[t.name][a] = {
                                                requiredMessage:
                                                    this.forms[
                                                        e.getAttribute(
                                                            'data-id'
                                                        )
                                                    ].errorMessage.required,
                                                minSelectionsMessage:
                                                    this.forms[
                                                        e.getAttribute(
                                                            'data-id'
                                                        )
                                                    ].errorMessage
                                                        .minSelections,
                                                maxSelectionsMessage:
                                                    this.forms[
                                                        e.getAttribute(
                                                            'data-id'
                                                        )
                                                    ].errorMessage
                                                        .maxSelections,
                                                exactlySelectionsMessage:
                                                    this.forms[
                                                        e.getAttribute(
                                                            'data-id'
                                                        )
                                                    ].errorMessage
                                                        .exactlySelections,
                                                params: n,
                                            }),
                                            (i[t.name][a].isRequired =
                                                void 0 !== i[t.name].presence)),
                                        'password' == a)
                                    ) {
                                        const e =
                                                null !==
                                                    t.getAttribute(
                                                        'data-additional-type'
                                                    ) &&
                                                t.getAttribute(
                                                    'data-additional-type'
                                                ),
                                            o =
                                                null !==
                                                    t.getAttribute(
                                                        'data-connected-element'
                                                    ) &&
                                                t.getAttribute(
                                                    'data-connected-element'
                                                );
                                        'confirm-password' === e &&
                                            o &&
                                            (i[t.name].equality = {
                                                attribute: o,
                                                message: m(
                                                    this.forms[l].errorMessage
                                                        .confirmPasswordNotMatch,
                                                    n
                                                ),
                                            });
                                        let r =
                                            !(
                                                !t.getAttribute(
                                                    'data-validate-rule'
                                                ) ||
                                                'false' ==
                                                    t.getAttribute(
                                                        'data-validate-rule'
                                                    )
                                            ) &&
                                            t.getAttribute(
                                                'data-validate-rule'
                                            );
                                        r &&
                                            ('advancedValidateRule' === r &&
                                                (r =
                                                    null !==
                                                    t.getAttribute(
                                                        'data-validate-rule'
                                                    )
                                                        ? t.getAttribute(
                                                              'data-advanced-validate-rule'
                                                          )
                                                        : ''),
                                            (i[t.name].format = {
                                                pattern: r,
                                                flags: 'g',
                                                message: m(
                                                    this.forms[l].errorMessage
                                                        .invalidPassword,
                                                    n
                                                ),
                                            }));
                                    }
                                });
                        null !=
                            e.querySelector(
                                '.block-container .globo-g-recaptcha'
                            ) &&
                            Globo.FormBuilder.shop.settings.reCaptcha
                                ?.siteKey &&
                            (i.reCaptcha = {
                                reCaptcha: {
                                    isRequired: !0,
                                    requiredMessage:
                                        this.forms[l].errorMessage
                                            .requiredCaptcha,
                                },
                            }),
                            (a.validators.file = function (t, o, r) {
                                const a = e.querySelector('[name="' + r + '"]');
                                let i = 0,
                                    l = !0;
                                return (
                                    Array.from(a.files).forEach(e => {
                                        (i += e.size),
                                            -1 ===
                                                o.allowedExtension.indexOf(
                                                    (function (e) {
                                                        const t = e
                                                                .split('\\')
                                                                .pop()
                                                                .split('/')
                                                                .pop(),
                                                            o =
                                                                t.lastIndexOf(
                                                                    '.'
                                                                );
                                                        return o < 1
                                                            ? ''
                                                            : t.substr(o + 1);
                                                    })(e.name).toLowerCase()
                                                ) && (l = !1);
                                    }),
                                    i / 1e3 > o.maxFileSize
                                        ? o.sizeLimitMessage
                                        : l
                                        ? null
                                        : o.notAllowedExtension
                                );
                            }),
                            (a.validators.checkbox = function (t, o, r, a) {
                                let i;
                                const l = e.querySelectorAll(
                                        "[name='" + r + "']"
                                    ),
                                    s = r.replace('[]', ''),
                                    n =
                                        Globo.FormBuilder.forms[
                                            parseInt(e.getAttribute('data-id'))
                                        ];
                                let c = null;
                                for (let e of n.elements)
                                    if ('group' === e.type) {
                                        const t = e.elements.find(
                                            e => e.id === s
                                        );
                                        if (t) {
                                            c = t;
                                            break;
                                        }
                                    } else if (e.id === s) {
                                        c = e;
                                        break;
                                    }
                                let d = !1,
                                    u = 0;
                                return (
                                    l.forEach(e => {
                                        e.checked && ((d = !0), u++),
                                            'text' === e.type &&
                                                ((d = !!e.value), u++);
                                    }),
                                    o.isRequired &&
                                        (i = d ? null : o.requiredMessage),
                                    d &&
                                        c &&
                                        c.limitSelections &&
                                        c.limitRange &&
                                        (c.limitRange?.[0] == c.limitRange?.[1]
                                            ? c.limitRange?.[0] &&
                                              c.limitRange?.[1] &&
                                              u != c.limitRange[0] &&
                                              ((i = o.exactlySelectionsMessage),
                                              (o.params.exact_selections =
                                                  c.limitRange[0]))
                                            : (c.limitRange?.[0] &&
                                                  !isNaN(c.limitRange?.[0]) &&
                                                  u < c.limitRange?.[0] &&
                                                  ((i = o.minSelectionsMessage),
                                                  (o.params.min_selections =
                                                      c.limitRange[0])),
                                              c.limitRange?.[1] &&
                                                  !isNaN(c.limitRange?.[1]) &&
                                                  u > c.limitRange?.[1] &&
                                                  ((i = o.maxSelectionsMessage),
                                                  (o.params.max_selections =
                                                      c.limitRange[1])))),
                                    i ? m(i, o.params) : null
                                );
                            }),
                            (a.validators.reCaptcha = function (t, o, r, a) {
                                const i = e.querySelector("[name='" + r + "']");
                                if (i) {
                                    const e = grecaptcha.getResponse(
                                        i.getAttribute('reCaptcha-widget-id')
                                    );
                                    return (
                                        (i.value = e),
                                        '' != i.value ? null : o.requiredMessage
                                    );
                                }
                                return null;
                            }),
                            (a.validators.ignore = function () {
                                return null;
                            }),
                            (a.validators.phone = function (o, r, a, i) {
                                const s = e.querySelectorAll(
                                    "[name='" + a + "'][validate]"
                                );
                                let n = !0;
                                return (
                                    s &&
                                        s.forEach(e => {
                                            const o =
                                                    e.getAttribute(
                                                        'data-intl-id'
                                                    ),
                                                r = t.phoneIntl[l][a + '-' + o];
                                            if (
                                                void 0 !== r &&
                                                e.value.trim() &&
                                                !r.isValidNumber()
                                            ) {
                                                const e =
                                                    r.getValidationError();
                                                console.log(
                                                    'Phone validate ',
                                                    0 == e
                                                        ? 'IS_POSSIBLE'
                                                        : 1 == e
                                                        ? 'INVALID_COUNTRY_CODE'
                                                        : 2 == e
                                                        ? 'TOO_SHORT'
                                                        : 3 == e
                                                        ? 'TOO_LONG'
                                                        : 4 == e
                                                        ? 'IS_POSSIBLE_LOCAL_ONLY'
                                                        : 'INVALID_LENGTH'
                                                ),
                                                    (n = !1);
                                            }
                                        }),
                                    n ? null : r.message
                                );
                            }),
                            this.shop.pricing.features.restrictedEmailDomains &&
                                (a.validators.restrictedEmailDomains =
                                    function (e, t, o, r) {
                                        if (!e) return null;
                                        const a = t.list;
                                        for (let o = 0; o < a.length; o++) {
                                            const r = a[o];
                                            if (e.endsWith(r)) return t.message;
                                        }
                                        return null;
                                    });
                        const s = a(o, i, {
                            fullMessages: !1,
                        });
                        !(function (e, t) {
                            let o = !1;
                            e.querySelectorAll(
                                'input[name], select[name], textarea[name]'
                            ).forEach(e => {
                                if ((d(e, t && t[e.name]), !o && t[e.name])) {
                                    const r = u(e, 'globo-form-control');
                                    r &&
                                        (Globo.FormBuilder.scrollIntoErrorGroup(
                                            r
                                        ),
                                        (function (e, t, o) {
                                            const r =
                                                e.querySelector('[data-label]');
                                            if (r) {
                                                const o = r.dataset.label;
                                                if (o) {
                                                    const r = `An error occurred in ${o}. ${t}`,
                                                        a =
                                                            e.querySelector(
                                                                '[role="alert"]'
                                                            );
                                                    if (a)
                                                        a.setAttribute(
                                                            'aria-label',
                                                            r
                                                        );
                                                    else {
                                                        const t =
                                                            document.createElement(
                                                                'p'
                                                            );
                                                        t.setAttribute(
                                                            'role',
                                                            'alert'
                                                        ),
                                                            t.setAttribute(
                                                                'aria-label',
                                                                r
                                                            ),
                                                            e.appendChild(t);
                                                    }
                                                }
                                            }
                                        })(r, t[e.name]),
                                        (o = !0));
                                }
                            });
                        })(o, s || {}),
                            s && Object.keys(s).length
                                ? o.classList.add('errors')
                                : o.classList.remove('errors');
                        const n = o.querySelectorAll(
                            'input:not(.item__quantity):not(.action--add-to-cart), textarea, select'
                        );
                        for (var c = 0; c < n.length; ++c)
                            n.item(c).addEventListener('change', function (e) {
                                const t =
                                    a(o, i, {
                                        fullMessages: !1,
                                    }) || {};
                                Object.keys(t).length
                                    ? o.classList.add('errors')
                                    : o.classList.remove('errors'),
                                    d(this, t[this.name]);
                            });

                        function d(e, t) {
                            if (e.name.includes('_product')) return;
                            const o = u(e.parentNode, 'globo-form-control'),
                                r = o.querySelector('.messages');
                            !(function (e) {
                                e.classList.remove('has-error'),
                                    e.classList.remove('has-success'),
                                    e
                                        .querySelectorAll('.help-block.error')
                                        .forEach(e => {
                                            e.parentNode.removeChild(e);
                                        });
                            })(o),
                                t
                                    ? (o.classList.add('has-error'),
                                      t.length &&
                                          (function (e, t) {
                                              const o =
                                                  document.createElement('p');
                                              o.classList.add('help-block'),
                                                  o.classList.add('error'),
                                                  (o.innerText = t),
                                                  e.appendChild(o);
                                          })(r, t[0]))
                                    : o.classList.add('has-success');
                        }

                        function u(e, t) {
                            return e && e != document
                                ? e.classList.contains(t)
                                    ? e
                                    : u(e.parentNode, t)
                                : null;
                        }

                        function m(e, t) {
                            if (!e) return e;
                            const o = {
                                uppercase: e => e.toUpperCase(),
                                lowercase: e => e.toLowerCase(),
                                capitalize: e =>
                                    e.charAt(0).toUpperCase() +
                                    e.slice(1).toLowerCase(),
                            };
                            return e.replace(
                                /\{\{\s*(\w+)(?:\s*\|\s*(\w+))?\s*\}\}/g,
                                (e, r, a) => {
                                    let i = t[r];
                                    return a && o[a] && (i = o[a](i)), i || '';
                                }
                            );
                        }
                    },
                    scrollIntoErrorGroup: function (e) {
                        e.scrollIntoView({
                            behavior: 'smooth',
                            block: 'nearest',
                        });
                    },
                },
                l = o(2733),
                s = {
                    handleSubmit: function (e) {
                        e.preventDefault(), e.stopPropagation();
                        e.target;
                        const t = e.target.getAttribute('data-id');
                        Globo.FormBuilder.handleValidate(e.target);
                        const o = new CustomEvent(
                            'globo.formbuilder.form.beforeSubmit',
                            {
                                detail: {
                                    form: e.target,
                                    formId: e.target.getAttribute('data-id'),
                                },
                            }
                        );
                        document.dispatchEvent(o);
                        if (e.target.querySelector('.block-container.errors'))
                            return;
                        const r = new CustomEvent(
                            'globo.formbuilder.form.submitting',
                            {
                                detail: {
                                    form: e.target,
                                    formId: e.target.getAttribute('data-id'),
                                },
                            }
                        );
                        document.dispatchEvent(r);
                        var a = e.target.querySelector(
                            "button[type='submit'],.action.submit"
                        );
                        a.classList.add('loading'),
                            a.setAttribute('disabled', 'disabled');
                        const i = e.target
                            .closest('.globo-form')
                            .querySelector('.gfb__indicator--progress');
                        i && (i.style.width = '100%');
                        let l = e.target
                            .closest('.globo-form-app')
                            .querySelectorAll(
                                '[data-message-success],.message.success'
                            );
                        var s = e.target.querySelectorAll(
                                'input, textarea, select'
                            ),
                            n = {
                                '{{customer.name}}': Globo.FormBuilder.customer
                                    ? Globo.FormBuilder.customer.name
                                    : '',
                                '{{customer.email}}': Globo.FormBuilder.customer
                                    ? Globo.FormBuilder.customer.email
                                    : '',
                                '{{page.title}}': Globo.FormBuilder.page
                                    ? Globo.FormBuilder.page.title
                                    : '',
                                '{{page.href}}': Globo.FormBuilder.page
                                    ? Globo.FormBuilder.page.href
                                    : '',
                            };
                        l.forEach(function (e) {
                            e.innerHTML = Globo.FormBuilder.addVariables(
                                e.innerHTML,
                                n,
                                s
                            );
                        });
                        const c = e.target.querySelectorAll('[type="hidden"]');
                        c &&
                            c.forEach(function (e) {
                                if (
                                    e.value.indexOf('{{-') > -1 &&
                                    e.value.indexOf('-}}') > -1
                                ) {
                                    const t = e.value
                                        .replace('{{-', '')
                                        .replace('-}}', '')
                                        .trim()
                                        .split('.');
                                    e.value =
                                        void 0 !== Globo.FormBuilder[t[0]] &&
                                        void 0 !== Globo.FormBuilder[t[0]][t[1]]
                                            ? Globo.FormBuilder[t[0]][t[1]]
                                            : '';
                                }
                            });
                        let d = [];
                        const u = e.target.querySelectorAll(
                                '.action--add-to-cart'
                            ),
                            m = Globo.FormBuilder.bulkOrder;
                        let g = [];
                        u.length &&
                            u.forEach(e => {
                                e.checked && (g = m.addItems(g, e));
                            }),
                            g.length &&
                                void 0 !== Globo.FormBuilder.page &&
                                d.push(m.addProducts(g, e.target)),
                            d.push(Globo.FormBuilder.xhr(e.target)),
                            Promise.all(d).then(o => {
                                a.classList.remove('loading'),
                                    a.removeAttribute('disabled'),
                                    i && i.style.removeProperty('width'),
                                    e.target
                                        .querySelectorAll('.message')
                                        .forEach(function (e) {
                                            e.style.display = 'none';
                                        });
                                let r = '',
                                    c = '';
                                if (
                                    (o.map(e => {
                                        e?.items || 'Cart Error' == e?.message
                                            ? (r = e)
                                            : (c = e);
                                    }),
                                    'true' == c.success)
                                ) {
                                    const a = new CustomEvent(
                                        'globo.formbuilder.form.submitted',
                                        {
                                            detail: {
                                                form: e.target,
                                                formId: e.target.getAttribute(
                                                    'data-id'
                                                ),
                                                response: o,
                                            },
                                        }
                                    );
                                    if (
                                        (document.dispatchEvent(a),
                                        Globo.FormBuilder.forms[t].publish
                                            ?.submitedScriptSet)
                                    ) {
                                        let e =
                                            Globo.FormBuilder.forms[t].publish
                                                ?.afterSubmitScript;
                                        e &&
                                            ((e =
                                                Globo.FormBuilder.addVariables(
                                                    e,
                                                    n,
                                                    s
                                                )),
                                            new Function(e)());
                                    }
                                    if (
                                        (l.forEach(function (e) {
                                            e.innerHTML = e.innerHTML.replace(
                                                '{{id}}',
                                                c.id ?? ''
                                            );
                                        }),
                                        c.discount)
                                    ) {
                                        let t = e.target
                                            .closest('.globo-form-app')
                                            .querySelectorAll(
                                                '.gfb__discount-wrapper'
                                            );
                                        e.target
                                            .closest('.globo-form-app')
                                            .querySelectorAll(
                                                '.gfb__discount-wrapper .gfb__discount-code'
                                            )
                                            .forEach(function (e) {
                                                e.innerHTML = c.discount;
                                            }),
                                            t.forEach(function (e) {
                                                e.style.display = 'block';
                                            });
                                    }
                                    if (
                                        (e.target.querySelectorAll(
                                            '.gfb__label__shink,.gfb__label__filled, gfb__label__autofill'
                                        ).length > 0 &&
                                            e.target
                                                .querySelectorAll(
                                                    '.gfb__label__shink,.gfb__label__filled, gfb__label__autofill'
                                                )
                                                .forEach(function (e) {
                                                    e.classList.remove(
                                                        'gfb__label__shink',
                                                        'gfb__label__filled',
                                                        'gfb__label__autofill'
                                                    );
                                                }),
                                        void 0 !== r.items)
                                    ) {
                                        const t = Globo.FormBuilder.forms[
                                            e.target.getAttribute('data-id')
                                        ].elements.find(
                                            e => (e.id = 'products')
                                        );
                                        t.successMessage &&
                                            e.target
                                                .querySelectorAll(
                                                    '[data-message-success],.message.success'
                                                )
                                                .forEach(function (e) {
                                                    e.querySelector(
                                                        '.content'
                                                    ).insertAdjacentHTML(
                                                        'beforebegin',
                                                        '<h4>' +
                                                            t.successMessage +
                                                            '</h4></br>'
                                                    );
                                                });
                                        var d = new CustomEvent(
                                            'globo.formbuilder.bulkorder.added',
                                            {
                                                detail: {
                                                    form: e.target,
                                                    formId: e.target.getAttribute(
                                                        'data-id'
                                                    ),
                                                    response: o,
                                                    cartItem: r.items,
                                                },
                                            }
                                        );
                                        document.dispatchEvent(d);
                                    } else if ('Cart Error' == r.message) {
                                        e.target.querySelector(
                                            '.message.warning .content'
                                        ).innerHTML = r.description;
                                    }
                                    const i =
                                        Globo.FormBuilder.forms[
                                            e.target.getAttribute('data-id')
                                        ].afterSubmit;
                                    if (i.enableGa) {
                                        const e =
                                                (i.gaEventName &&
                                                    Globo.FormBuilder.addVariables(
                                                        i.gaEventName,
                                                        n,
                                                        s
                                                    )) ||
                                                '',
                                            t =
                                                Globo.FormBuilder.addVariables(
                                                    i.gaEventCategory,
                                                    n,
                                                    s
                                                ) || '',
                                            o =
                                                Globo.FormBuilder.addVariables(
                                                    i.gaEventAction,
                                                    n,
                                                    s
                                                ) || '',
                                            r =
                                                Globo.FormBuilder.addVariables(
                                                    i.gaEventLabel,
                                                    n,
                                                    s
                                                ) || '';
                                        if ('undefined' != typeof gtag) {
                                            const a =
                                                    'undefined' !=
                                                        typeof trekkie &&
                                                    trekkie?.config?.[
                                                        'Google Gtag Pixel'
                                                    ]?.conversionId,
                                                i = {
                                                    event_category: t,
                                                    event_action: o,
                                                    event_label: r,
                                                };
                                            a && (i.send_to = [a]),
                                                gtag(
                                                    'event',
                                                    e || 'globo_form_submit',
                                                    i
                                                );
                                        } else if ('undefined' != typeof ga) {
                                            ga('send', {
                                                hitType: 'event',
                                                eventCategory: t,
                                                eventAction: o,
                                                eventLabel: r,
                                            });
                                        }
                                    }
                                    if (
                                        'function' == typeof fbq &&
                                        i.enableFpx
                                    ) {
                                        const t =
                                            Globo.FormBuilder.addVariables(
                                                i.fpxTrackerName,
                                                n,
                                                s
                                            ) || 'GloboFormBuilder-Submit';
                                        fbq('trackCustom', t, {
                                            pageTitle:
                                                Globo.FormBuilder.page.title,
                                            pageHref:
                                                Globo.FormBuilder.page.href,
                                            formTitle:
                                                Globo.FormBuilder.forms[
                                                    e.target.getAttribute(
                                                        'data-id'
                                                    )
                                                ].header.title,
                                        });
                                    }
                                    if (
                                        ((void 0 !==
                                            Globo.FormBuilder.utm.view &&
                                            'formbuilder_edit' ===
                                                Globo.FormBuilder.utm.view) ||
                                            'redirectToPage' != i.action ||
                                            window.setTimeout(
                                                function () {
                                                    window.location.href =
                                                        i.redirectUrl[
                                                            Shopify.locale
                                                        ] || i.redirectUrl;
                                                },
                                                ('undefined' != typeof ga &&
                                                    i.enableGa) ||
                                                    ('function' == typeof fbq &&
                                                        i.enableFpx)
                                                    ? 1500
                                                    : 100
                                            ),
                                        'clearForm' == i.action)
                                    ) {
                                        if (
                                            void 0 ===
                                                Globo.FormBuilder.utm.view ||
                                            'formbuilder_edit' !==
                                                Globo.FormBuilder.utm.view
                                        ) {
                                            e.target.reset();
                                            const t = new CustomEvent(
                                                'globo.formbuilder.form.reset',
                                                {
                                                    detail: {
                                                        form: e.target,
                                                        formId: e.target.getAttribute(
                                                            'data-id'
                                                        ),
                                                    },
                                                }
                                            );
                                            document.dispatchEvent(t);
                                        }
                                        Globo.FormBuilder.showMessage(
                                            e.target.querySelector(
                                                '[data-message-success],.message.success'
                                            )
                                        ),
                                            Globo.FormBuilder.showMessage(
                                                e.target.querySelector(
                                                    '.message.warning'
                                                )
                                            );
                                        const t =
                                            e.target.querySelector(
                                                '.gfb__dropzone'
                                            );
                                        t &&
                                            (t.setAttribute(
                                                'data-area-previewing',
                                                !1
                                            ),
                                            (t.querySelector(
                                                '.gfb__dropzone--preview--area'
                                            ).innerHTML = '')),
                                            void 0 !== r.items &&
                                                Globo.FormBuilder.renderForm(
                                                    e.target,
                                                    e.target.getAttribute(
                                                        'data-id'
                                                    ),
                                                    [
                                                        {
                                                            success:
                                                                e.target.querySelector(
                                                                    '[data-message-success],.message.success'
                                                                ).outerHTML,
                                                        },
                                                    ]
                                                );
                                        const { functions: o } =
                                            Globo.FormBuilder.forms[
                                                e.target.getAttribute('data-id')
                                            ];
                                        o.includes('reCaptcha') &&
                                            Globo.FormBuilder.reCaptcha.resetReCaptcha(
                                                e
                                            ),
                                            o.includes('product') &&
                                                Globo.FormBuilder.product.init(
                                                    e.target,
                                                    e.target.getAttribute(
                                                        'data-id'
                                                    )
                                                );
                                        const a = e.target.querySelector(
                                            '.globo-formbuilder-wizard'
                                        );
                                        if (a) {
                                            new Globo.FormBuilder.Wizard(
                                                e.target.closest(
                                                    '.globo-formbuilder'
                                                ),
                                                a
                                            ).reset();
                                        }
                                    }
                                    if ('hideForm' == i.action) {
                                        (void 0 !==
                                            Globo.FormBuilder.utm.view &&
                                            'formbuilder_edit' ===
                                                Globo.FormBuilder.utm.view) ||
                                            (e.target.style.display = 'none');
                                        const t =
                                            e.target.parentNode.querySelectorAll(
                                                '[data-message-success],.message.success'
                                            );
                                        t &&
                                            Globo.FormBuilder.showMessage(
                                                t[t.length - 1]
                                            ),
                                            Globo.FormBuilder.showMessage(
                                                e.target.querySelector(
                                                    '.message.warning'
                                                )
                                            );
                                    }
                                } else {
                                    const t = e.target.querySelector(
                                            '.message.error .content'
                                        ),
                                        a = void 0 !== c.errors && c.errors;
                                    if (a) {
                                        let i = '';
                                        for (
                                            var u = 0;
                                            u < Object.keys(a).length;
                                            u++
                                        )
                                            if ('string' == typeof a[u])
                                                i +=
                                                    '<div class="err-item"><span class="label"></span><span class="err">' +
                                                    a[u] +
                                                    '</span></div>';
                                            else {
                                                let t =
                                                    e.target.querySelector(
                                                        '[name="_keyLabel"]'
                                                    );
                                                t && (t = JSON.parse(t.value)),
                                                    void 0 !==
                                                    t[Object.keys(a)[u]]
                                                        ? (i +=
                                                              '<div class="err-item"><span class="label">' +
                                                              t[
                                                                  Object.keys(
                                                                      a
                                                                  )[u]
                                                              ] +
                                                              '</span> : <span class="err">' +
                                                              a[
                                                                  Object.keys(
                                                                      a
                                                                  )[u]
                                                              ] +
                                                              '</span></div>')
                                                        : (i +=
                                                              '<div class="err-item"><span class="label"></span><span class="err">' +
                                                              a[
                                                                  Object.keys(
                                                                      a
                                                                  )[u]
                                                              ] +
                                                              '</span></div>');
                                            }
                                        if (void 0 !== r.items) {
                                            const t = Globo.FormBuilder.forms[
                                                e.target.getAttribute('data-id')
                                            ].elements.find(
                                                e => (e.id = 'products')
                                            );
                                            e.target
                                                .querySelectorAll(
                                                    '[data-message-success],.message.success'
                                                )
                                                .forEach(function (e) {
                                                    e.querySelector(
                                                        '.content'
                                                    ).innerHTML =
                                                        '<h4>' +
                                                        t.successMessage +
                                                        '</h4></br>';
                                                }),
                                                Globo.FormBuilder.showMessage(
                                                    e.target.querySelector(
                                                        '[data-message-success],.message.success'
                                                    )
                                                );
                                            d = new CustomEvent(
                                                'globo.formbuilder.bulkorder.added',
                                                {
                                                    detail: {
                                                        form: e.target,
                                                        formId: e.target.getAttribute(
                                                            'data-id'
                                                        ),
                                                        response: o,
                                                        cartItem: r.items,
                                                    },
                                                }
                                            );
                                            document.dispatchEvent(d);
                                        } else if ('Cart Error' == r.message) {
                                            (e.target.querySelector(
                                                '.message.warning .content'
                                            ).innerHTML = r.description),
                                                Globo.FormBuilder.showMessage(
                                                    e.target.querySelector(
                                                        '.message.warning'
                                                    )
                                                );
                                        }
                                        t.innerHTML = i;
                                        const { functions: l } =
                                            Globo.FormBuilder.forms[
                                                e.target.getAttribute('data-id')
                                            ];
                                        l.includes('reCaptcha') &&
                                            Globo.FormBuilder.reCaptcha.resetReCaptcha(
                                                e
                                            );
                                    }
                                    Globo.FormBuilder.showMessage(
                                        e.target.querySelector('.message.error')
                                    );
                                    const i = [
                                        {
                                            success: e.target.querySelector(
                                                '[data-message-success],.message.success'
                                            ).outerHTML,
                                        },
                                        {
                                            error: e.target.querySelector(
                                                '.message.error'
                                            ).outerHTML,
                                        },
                                    ];
                                    void 0 !== r.items &&
                                        void 0 !== Globo.FormBuilder.page &&
                                        Globo.FormBuilder.renderForm(
                                            e.target,
                                            e.target.getAttribute('data-id'),
                                            i
                                        );
                                }
                            });
                    },
                    xhr: function (e) {
                        const t = e.getAttribute('action'),
                            o = e.getAttribute('method'),
                            r = e
                                .querySelector('.block-container')
                                .getAttribute('data-id');
                        let a = new FormData(e);
                        const i = new FormData();
                        let s,
                            n = 0;
                        void 0 !== a.fd && (a = a.fd),
                            'undefined' != typeof Shopify &&
                                Shopify?.locale &&
                                i.append('locale', Shopify.locale),
                            i.append(
                                'time_zone',
                                Intl.DateTimeFormat().resolvedOptions().timeZone
                            ),
                            document.body.classList.contains(
                                'globo-formbuilder-admin-preview'
                            ) && i.append('preview', !0);
                        for (const t of a)
                            if (t[0].includes('select_product')) {
                                t[0] !== s && ((s = t[0]), (n = 0));
                                const o = JSON.parse(
                                    e.querySelector(
                                        `[name="${t[0]}"][value="${t[1]}"]`
                                    ).nextElementSibling.innerHTML
                                );
                                i.append(
                                    t[0] + `[${n}][url]`,
                                    `https://${this.shop.url}/admin/products/${o.id}`
                                ),
                                    i.append(t[0] + `[${n}][name]`, o.title),
                                    n++;
                            } else {
                                if (t[0].indexOf('products') > -1) {
                                    const o = e.querySelector(
                                        '.item__quantity[data-variant-id="' +
                                            t[1] +
                                            '"]'
                                    );
                                    if (o) {
                                        const e =
                                            t[0].split('-').length > 1
                                                ? `quantities-${
                                                      t[0].split('-')[1]
                                                  }`
                                                : 'quantities[]';
                                        i.append(e, t[1] + ' / ' + o.value);
                                    }
                                }
                                if (
                                    t[0].indexOf('phone') > -1 &&
                                    void 0 !== this.phoneIntl &&
                                    void 0 !== this.phoneIntl[r]
                                ) {
                                    let o = e
                                        .querySelector('[name="' + t[0] + '"]')
                                        .getAttribute('data-intl-id');
                                    void 0 !==
                                        this.phoneIntl[r][t[0] + '-' + o] &&
                                        (t[1] =
                                            this.phoneIntl[r][
                                                t[0] + '-' + o
                                            ].getNumber());
                                }
                                if (!t[0].includes('_product'))
                                    if (t[0].includes('product-')) {
                                        if (t[1]) {
                                            t[1]
                                                .split(', ')
                                                .forEach(e =>
                                                    i.append(`${t[0]}[]`, e)
                                                );
                                        }
                                    } else i.append(t[0], t[1]);
                            }
                        return (
                            l.get('hubspotutk') &&
                                i.append('hubspotutk', l.get('hubspotutk')),
                            new Promise((r, a) => {
                                r(
                                    fetch(t, {
                                        method: o,
                                        body: i,
                                    })
                                        .then(function (e) {
                                            if (e.ok) return e.json();
                                            {
                                                const t = new Error(
                                                    e.statusText
                                                );
                                                throw ((t.response = e), t);
                                            }
                                        })
                                        .then(e => e)
                                        .catch(t => {
                                            e.querySelector(
                                                '.action.submit'
                                            ).classList.remove('loading');
                                            const o =
                                                    e.querySelector(
                                                        '.message.error'
                                                    ),
                                                r =
                                                    o.getAttribute(
                                                        'data-other-error'
                                                    ),
                                                a =
                                                    e.querySelector(
                                                        '.message.error'
                                                    );
                                            a &&
                                                (a.innerHTML =
                                                    '<div class="err-item"><span class="label"></span><span class="err">' +
                                                    (r ||
                                                        'Too many request, please try again later') +
                                                    '</span></div>'),
                                                o && this.showMessage(o);
                                        })
                                );
                            })
                        );
                    },
                },
                n = o(2733),
                c = {
                    ...i,
                    ...s,
                    showMessage: function (e) {
                        if (e) {
                            var t = e.querySelector('.content');
                            null !== t &&
                                '' != t.innerHTML &&
                                (e.style.display = 'block');
                        }
                    },
                    handleResetForm: function (e) {
                        const t = e.closest('.globo-formbuilder');
                        if (t) {
                            const e = t.querySelectorAll(
                                ".globo-form-control [name]:not([type='file']):not([type='hidden'][data-type='fixed'])"
                            );
                            e &&
                                e.forEach(function (e) {
                                    const t = e.closest('.globo-form-control');
                                    !t ||
                                        (null !=
                                            t.getAttribute(
                                                'data-default-value'
                                            ) &&
                                            '' !=
                                                t.getAttribute(
                                                    'data-default-value'
                                                ) &&
                                            ',' !=
                                                t.getAttribute(
                                                    'data-default-value'
                                                ) &&
                                            '\\' !=
                                                t.getAttribute(
                                                    'data-default-value'
                                                )) ||
                                        ('checkbox' == e.type ||
                                        'radio' == e.type
                                            ? (e.checked = !1)
                                            : (e.value = ''));
                                }),
                                t.querySelectorAll('[data-connected-id]') &&
                                    t
                                        .querySelectorAll('[data-connected-id]')
                                        .forEach(e => {
                                            e.classList.add('hidden'),
                                                (e.style.display = 'none');
                                        });
                            const o = t.querySelector(
                                '.globo-formbuilder-wizard'
                            );
                            if (o) {
                                const e = new this.Wizard(t, o);
                                e.reset(),
                                    1 ==
                                        t.querySelectorAll(
                                            '.wizard__steps .steps .step:not(.hidden)'
                                        ).length &&
                                        t
                                            .querySelector(
                                                '.wizard__steps .steps'
                                            )
                                            .classList.add('hidden'),
                                    e.panels.updatePanelsContainerHeight();
                            }
                            (
                                this.forms[t.getAttribute('data-id')]
                                    .functions ??
                                this.specialElements([
                                    t.getAttribute('data-id'),
                                ])
                            ).includes('hidden') &&
                                this.handleHidden(t, t.getAttribute('data-id'));
                        }
                    },
                    dismiss: function (e) {
                        e.parentNode.style.display = 'none';
                        var t = e.closest('.message');
                        if (t.classList.contains('success')) {
                            var o = e.closest('.g-container');
                            t.innerHTML =
                                Globo.FormBuilder.forms[
                                    o.getAttribute('data-id')
                                ].afterSubmit.message;
                        }
                    },
                    addVariables: function (e, t, o) {
                        var r = [];
                        return (
                            (e = e.replaceAll(
                                /{{customer.name}}|{{customer.email}}|{{page.title}}|{{page.href}}/g,
                                function (e) {
                                    return t[e];
                                }
                            )),
                            o.length &&
                                o.forEach(t => {
                                    const o =
                                        'checkbox' === t.type ||
                                        ('file' === t.type && t.multiple)
                                            ? t.name.split('[')[0]
                                            : t.name;
                                    e.indexOf('{{' + o + '}}') > -1 &&
                                        ('radio' === t.type
                                            ? (e = e.replaceAll(
                                                  '{{' + t.name + '}}',
                                                  t
                                                      .closest(
                                                          '.globo-form-control'
                                                      )
                                                      .querySelector(
                                                          '[name=' +
                                                              t.name +
                                                              ']:checked'
                                                      )
                                                      ? t
                                                            .closest(
                                                                '.globo-form-control'
                                                            )
                                                            .querySelector(
                                                                '[name=' +
                                                                    t.name +
                                                                    ']:checked'
                                                            ).value
                                                      : ''
                                              ))
                                            : 'checkbox' === t.type
                                            ? ((r[o] =
                                                  void 0 !== r[o] ? r[o] : []),
                                              t.checked && r[o].push(t.value))
                                            : 'file' === t.type
                                            ? t.multiple
                                                ? ((r[o] =
                                                      void 0 !== r[o]
                                                          ? r[o]
                                                          : []),
                                                  t.files.length &&
                                                      Object.values(
                                                          t.files
                                                      ).map(e => {
                                                          r[o].push(e.name);
                                                      }))
                                                : (e = e.replaceAll(
                                                      '{{' + t.name + '}}',
                                                      t.value
                                                          ? t.value.split(
                                                                'fakepath\\'
                                                            )[1]
                                                          : ''
                                                  ))
                                            : (e = e.replaceAll(
                                                  '{{' + t.name + '}}',
                                                  t.value
                                              )));
                                }),
                            Object.keys(r).length > 0 &&
                                Object.entries(r).map(t => {
                                    e.indexOf('{{' + t[0] + '}}') > -1 &&
                                        (e = e.replaceAll(
                                            '{{' + t[0] + '}}',
                                            t[1]
                                        ));
                                }),
                            e
                        );
                    },
                    closeModalForm: function (e) {
                        const t = e.closest('.globo-form-publish-modal');
                        if (
                            ((t.style.display = 'none'),
                            t.classList.contains('lightbox'))
                        ) {
                            const e =
                                this.forms[
                                    t
                                        .querySelector('.globo-formbuilder')
                                        .getAttribute('data-id')
                                ].publish;
                            switch (e.selectTime) {
                                case 'none':
                                    var o = 0;
                                    break;
                                case 'weeks':
                                    o =
                                        void 0 !== e.setCookieWeeks
                                            ? 7 * parseInt(e.setCookieWeeks)
                                            : 7;
                                    break;
                                case 'days':
                                    o =
                                        void 0 !== e.setCookie
                                            ? parseInt(e.setCookie)
                                            : 1;
                                    break;
                                case 'hours':
                                    o =
                                        void 0 !== e.setCookieHours
                                            ? parseInt(e.setCookieHours) / 12
                                            : 1 / 12;
                                    break;
                                default:
                                    o = 365;
                            }
                            n.set(
                                'globo-form-lightbox-' +
                                    t.getAttribute('data-id'),
                                o,
                                {
                                    expires: o,
                                }
                            );
                        }
                    },
                    handleOtherOption: function (e, t) {
                        this.forms[t];
                        e.querySelectorAll(
                            '.gfb__other-option__toggle'
                        ).forEach(e => {
                            if (
                                (e.addEventListener(
                                    'change',
                                    this.toggleOtherOption
                                ),
                                'radio' === e.type)
                            ) {
                                e.closest('.globo-form-control')
                                    .querySelectorAll('input[type="radio"]')
                                    .forEach(t => {
                                        !e.isSameNode(t) &&
                                            t.addEventListener(
                                                'change',
                                                function (t) {
                                                    e.dispatchEvent(
                                                        new Event('change')
                                                    );
                                                }
                                            );
                                    });
                            }
                        });
                    },
                    toggleOtherOption: function (e) {
                        const t = e.target,
                            o = t.parentNode.querySelector(
                                '.gfb__other-option__value'
                            );
                        t.checked
                            ? (t.hasAttribute('presence') &&
                                  (o.setAttribute('presence', ''),
                                  t.removeAttribute('presence')),
                              t.hasAttribute('data-type') &&
                                  (o.setAttribute(
                                      'data-type',
                                      t.getAttribute('data-type')
                                  ),
                                  t.removeAttribute('data-type')),
                              t.getAttribute('name') &&
                                  (o.setAttribute(
                                      'name',
                                      t.getAttribute('name')
                                  ),
                                  'checkbox' === t.type &&
                                      t.removeAttribute('name')),
                              o.focus())
                            : (o.hasAttribute('presence') &&
                                  (t.setAttribute('presence', ''),
                                  o.removeAttribute('presence')),
                              o.hasAttribute('data-type') &&
                                  (t.setAttribute(
                                      'data-type',
                                      o.getAttribute('data-type')
                                  ),
                                  o.removeAttribute('data-type')),
                              o.getAttribute('name') &&
                                  (t.setAttribute(
                                      'name',
                                      o.getAttribute('name')
                                  ),
                                  o.removeAttribute('name')));
                    },
                    handlePlusQuantity: function (e) {
                        let t = e
                            .closest('.globo-form-control')
                            .querySelector('.gfb__quantity-input');
                        const o = e.parentNode.getAttribute('data-limit');
                        ((o && parseInt(t.value) < parseInt(o)) || !o) &&
                            (t.value++, t.dispatchEvent(new Event('change')));
                    },
                    handleMinusQuantity: function (e) {
                        let t = e
                            .closest('.globo-form-control')
                            .querySelector('.gfb__quantity-input');
                        parseInt(t.value) > 0 &&
                            (t.value--, t.dispatchEvent(new Event('change')));
                    },
                    addInputs: function (e) {
                        let t = e
                                .closest('.globo-form-control')
                                .querySelector('.gfb__form-inputs'),
                            o = t.innerHTML;
                        var r = document.createElement('div');
                        (r.innerHTML = o),
                            r.firstElementChild.classList.add('gfb__no-label'),
                            t.appendChild(r.firstElementChild);
                        const a = t.getAttribute('data-limit')
                            ? t.getAttribute('data-limit')
                            : 20;
                        if (
                            (t.querySelectorAll('.globo-form-input').length ==
                                a &&
                                e.parentNode.setAttribute(
                                    'style',
                                    'display: none !important; pointer-events: none !important; visibility: hidden !important'
                                ),
                            Globo.FormBuilder.wizardInstance)
                        ) {
                            const { wizardInstance: e } = Globo.FormBuilder;
                            e.panels.updatePanelsContainerHeight();
                        }
                    },
                    removeInputs: function (e) {
                        let t = e.closest('.globo-form-input');
                        if (
                            t.parentNode.querySelectorAll('.globo-form-input')
                                .length -
                                1 <
                            (t.parentNode.getAttribute('data-limit')
                                ? t.parentNode.getAttribute('data-limit')
                                : 20)
                        ) {
                            e.closest('.globo-form-control')
                                .querySelector('.gfb__repeater')
                                .removeAttribute('style');
                        }
                        if ((t.remove(), Globo.FormBuilder.wizardInstance)) {
                            const { wizardInstance: e } = Globo.FormBuilder;
                            e.panels.updatePanelsContainerHeight();
                        }
                    },
                    handleCopyDiscountCode: function (e) {
                        const t = e.querySelector('.gfb__copy'),
                            o = e.querySelector('.gfb__copied'),
                            r = e
                                .querySelector('.gfb__content-discount')
                                .innerText.trim();
                        navigator.clipboard
                            .writeText(r)
                            .then(() => {
                                (t.style.display = 'none'),
                                    (o.style.display = 'block'),
                                    (o.style.marginBottom = '-2px');
                            })
                            .catch(e => {
                                console.error(e);
                            });
                    },
                },
                d = o(2733),
                u = {
                    init: async function (e, t) {
                        this.needReRender(t, e) &&
                            (await this.renderForm(e, t)),
                            Object.assign(this, c),
                            e.addEventListener('submit', this.handleSubmit, !1),
                            this.handleLabel(e, t),
                            this.handleSelect(e, t),
                            this.handleRequireLogin(t),
                            this.handleLightBox(e, t),
                            this.handleOtherOption(e, t),
                            this.handleSwatchTooltip(e, t);
                        const o =
                            this.forms[t].functions ??
                            this.specialElements([t]);
                        o.includes('bulkOrder') && this.handleBulkOrder(e, t),
                            o.includes('cart') && this.handleCart(e, t),
                            o.includes('wizard') &&
                                (await this.handleWizard(e, t)),
                            o.includes('floatingForm') &&
                                this.handleFloatingForm(e, t),
                            o.includes('fileUpload') &&
                                this.handleDropZone(e, t),
                            o.includes('hidden') && this.handleHidden(e, t),
                            o.includes('intl-phone') &&
                                this.handleIntlPhone(e, t),
                            o.includes('datetime') && this.handleDateTime(e, t),
                            o.includes('conditional') &&
                                this.handleConditional(e, t),
                            o.includes('reCaptcha') &&
                                this.handleReCaptcha(e, t),
                            o.includes('account') && this.handleAccount(e, t),
                            o.includes('rangeSlider') &&
                                this.handleRangeSlider(e, t),
                            o.includes('signature') &&
                                this.handleSignature(e, t),
                            o.includes('select') &&
                                this.handleAdvancedSelect(e, t),
                            o.includes('product') && this.setupProducts(e, t);
                        const r = new CustomEvent(
                            'globo.formbuilder.form.loaded',
                            {
                                detail: {
                                    form: e,
                                    formId: t,
                                },
                            }
                        );
                        document.dispatchEvent(r);
                        var a = e.querySelectorAll('input, textarea, select'),
                            i = {
                                '{{customer.name}}': Globo.FormBuilder.customer
                                    ? Globo.FormBuilder.customer.name
                                    : '',
                                '{{customer.email}}': Globo.FormBuilder.customer
                                    ? Globo.FormBuilder.customer.email
                                    : '',
                                '{{page.title}}': Globo.FormBuilder.page
                                    ? Globo.FormBuilder.page.title
                                    : '',
                                '{{page.href}}': Globo.FormBuilder.page
                                    ? Globo.FormBuilder.page.href
                                    : '',
                            };
                        if (
                            Globo.FormBuilder.forms[t].publish?.loadedScriptSet
                        ) {
                            let e =
                                Globo.FormBuilder.forms[t].publish
                                    ?.afterLoadedScript;
                            e &&
                                ((e = Globo.FormBuilder.addVariables(e, i, a)),
                                new Function(e)());
                        }
                        this.handleMetrics(e, t);
                    },
                    handleMetrics: function (e, t) {
                        if (
                            document.body.classList.contains(
                                'globo-formbuilder-admin-preview'
                            )
                        )
                            return;
                        const o = this,
                            r = e.querySelector(
                                `.globo-form-app[data-id="${t}"]`
                            );
                        new IntersectionObserver(
                            function (e, a) {
                                for (let i of e)
                                    i.isIntersecting &&
                                        (o.sendMetrics(t), a.unobserve(r));
                            },
                            {
                                root: null,
                                rootMargin: '0px',
                                threshold: 0.5,
                            }
                        ).observe(r);
                    },
                    sendMetrics: function (e) {
                        let t = Shopify.shop;
                        'standalone' === this.page.type &&
                            (t = this.page.href.match(/share\/([^/]+)/)
                                ? this.page.href.match(/share\/([^/]+)/)[1] +
                                  '.myshopify.com'
                                : null);
                        const o = JSON.stringify({
                                shop_url: t,
                                form_id: e,
                                page_url: window.location.href,
                                locale: Shopify.locale,
                                time_zone:
                                    Intl.DateTimeFormat().resolvedOptions()
                                        .timeZone,
                            }),
                            r = new URL(this.url),
                            a = new URL('/api/metrics', r);
                        (navigator.sendBeacon && navigator.sendBeacon(a, o)) ||
                            fetch(a, {
                                body: o,
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                method: 'POST',
                                keepalive: !0,
                            });
                    },
                    needReRender: function (e, t) {
                        let o = !1;
                        const r = t
                            .querySelector('.globo-form[data-locale]')
                            ?.getAttribute('data-locale');
                        r !== Shopify.locale && (o = !0);
                        const a = {};
                        return (
                            document.querySelector(
                                '#globo-formbuilder-dynamicCSS'
                            ) &&
                                ((a.dynamicCSS = document.querySelector(
                                    '#globo-formbuilder-dynamicCSS'
                                ).innerHTML),
                                (o = !0)),
                            document.querySelector(
                                '#globo-formbuilder-template'
                            ) &&
                                ((a.template = document.querySelector(
                                    '#globo-formbuilder-template'
                                ).innerHTML),
                                (o = !0)),
                            document.querySelector(
                                '#globo-formbuilder-element'
                            ) &&
                                ((a.element = document.querySelector(
                                    '#globo-formbuilder-element'
                                ).innerHTML),
                                (o = !0)),
                            void 0 !== this.utm &&
                                void 0 !== this.utm.view &&
                                'formbuilder_edit' == this.utm.view &&
                                (o = !0),
                            (this.templates = a),
                            o ||
                                this.allFunctions.includes('bulkOrder') ||
                                !this.forms[e]?.html
                        );
                    },
                    renderForm: async function (e, t, r = !1) {
                        const { default: a } = await Promise.all([
                            o.e(736),
                            o.e(209),
                        ]).then(o.bind(o, 7480));
                        let i = [];
                        try {
                            if (this.forms[t]?.isStepByStepForm) {
                                let e = this.forms[t].elements
                                    .map(e => e.elements)
                                    .flat();
                                i = e.filter(
                                    e =>
                                        void 0 !== e &&
                                        e.id.indexOf('products') > -1
                                );
                            } else
                                i = this.forms[t].elements.filter(
                                    e => e.id.indexOf('products') > -1
                                );
                        } catch (e) {}
                        if (i.length) {
                            await this.handleBulkOrder(e, t);
                            const { bulkOrder: o } = Globo.FormBuilder;
                            await o.updateProducts(i, this.forms[t]);
                        }
                        const l =
                                this.templates.dynamicCSS ||
                                a.templates.dynamicCSS,
                            s = this.templates.template || a.templates.template,
                            n = this.templates.element || a.templates.element,
                            c = s[this.forms[t].template?.name] ?? s.index ?? s;
                        let d = a.parseAndRenderSync(c, {
                            configs: {
                                ...this.forms[t],
                                formId: t,
                            },
                            partialElement: n,
                            dynamicCSS: l,
                            formId: t,
                            Globo,
                        });
                        if (r && i.length) {
                            const { bulkOrder: e } = Globo.FormBuilder;
                            d = e.reShowMessage(d, r);
                        }
                        (e.innerHTML = d), e.setAttribute('data-id', t);
                    },
                    handleBulkOrder: async function (e, t) {
                        const r = await o.e(309).then(o.bind(o, 482)),
                            { default: a } = r;
                        Object.assign(Globo.FormBuilder, {
                            bulkOrder: a,
                        }),
                            a.init(e, t);
                    },
                    handleCart: async function (e, t) {
                        if ('cart' === this.page?.type) {
                            const t = await o.e(949).then(o.bind(o, 2434)),
                                { default: r } = t;
                            Object.assign(Globo.FormBuilder, {
                                Cart: r,
                            });
                            const a = new r(e);
                            a.setAttributeType(), a.updateCartNote();
                        }
                    },
                    handleWizard: async function (e, t) {
                        const r = await o.e(678).then(o.bind(o, 215)),
                            { default: a } = r;
                        Object.assign(Globo.FormBuilder, a);
                        const i = e.querySelector('.globo-formbuilder-wizard'),
                            l = new Globo.FormBuilder.Wizard(e, i);
                        (Globo.FormBuilder.wizardInstance = l),
                            l.init(),
                            (Globo.FormBuilder.forms[t].wizardInstance = l);
                    },
                    handleFloatingForm: async function (e, t) {
                        const r = await o.e(203).then(o.bind(o, 6396)),
                            { default: a } = r;
                        Object.assign(Globo.FormBuilder, a), a.init(e, t);
                    },
                    handleDropZone: async function (e, t) {
                        const r = await o.e(50).then(o.bind(o, 119)),
                            { default: a } = r;
                        Object.assign(Globo.FormBuilder, a), a.init(e, t);
                    },
                    handleRangeSlider: async function (e, t) {
                        const r = await o.e(53).then(o.bind(o, 1914)),
                            { default: a } = r;
                        a.init(e, t);
                    },
                    handleHidden: async function (e, t) {
                        const r = await o.e(507).then(o.bind(o, 6999)),
                            { default: a } = r;
                        (this.hiddenInit = a.init), this.hiddenInit(e, t);
                    },
                    handleIntlPhone: async function (e, t) {
                        const r = await o.e(970).then(o.bind(o, 3959)),
                            { default: a } = r;
                        a.init(e, t), a.countryChange(e, t);
                    },
                    handleDateTime: async function (e, t) {
                        const r = await Promise.all([o.e(284), o.e(720)]).then(
                                o.bind(o, 5415)
                            ),
                            { default: a } = r;
                        Object.assign(Globo.FormBuilder, a), a.init(e, t);
                    },
                    handleAdvancedSelect: async function (e, t) {
                        const r = await o.e(167).then(o.bind(o, 9316)),
                            { default: a } = r;
                        Object.assign(Globo.FormBuilder, a), a.init(e, t);
                    },
                    handleConditional: async function (e, t) {
                        const r = await o.e(17).then(o.bind(o, 9038)),
                            {
                                default: { init: a, ...i },
                            } = r;
                        Object.assign(Globo.FormBuilder, i), a(e, t);
                    },
                    handleReCaptcha: async function (e, t) {
                        const r = await o.e(134).then(o.bind(o, 3803)),
                            { default: a } = r;
                        Object.assign(Globo.FormBuilder, {
                            reCaptcha: a,
                        }),
                            a.init(e);
                    },
                    handleAccount: async function (e, t) {
                        const r = await o.e(644).then(o.bind(o, 6525)),
                            { default: a } = r;
                        Object.assign(Globo.FormBuilder, {
                            account: a,
                        }),
                            a.init(e, t);
                    },
                    handleLabel: function (e, t) {
                        const o = e.querySelectorAll(
                                '.globo-form-control:not([data-type="html"])'
                            ),
                            r = {};
                        for (let e = 0; e < o.length; e++) {
                            const a = o[e],
                                i = a.querySelector('.globo-label, legend'),
                                l = a.querySelector('[data-label]');
                            if (a.hasAttribute('data-multiple-label')) {
                                a.querySelectorAll(
                                    'label[data-field-name]'
                                ).forEach(e => {
                                    r[e.getAttribute('data-field-name')] =
                                        e.dataset.label || e.innerHTML;
                                });
                            } else {
                                const e = a.querySelector('[name]');
                                if (e) {
                                    const t = e
                                        .getAttribute('name')
                                        .replace('[]', '');
                                    if (
                                        'reCaptcha' !== t &&
                                        'recaptcha_response' !== t
                                    )
                                        if (t.includes('_product')) {
                                            const e = t.split('_')[1];
                                            r[e] =
                                                l.getAttribute('data-label') ||
                                                i?.innerText;
                                        } else
                                            r[t] =
                                                l.getAttribute('data-label') ||
                                                i?.innerText;
                                }
                            }
                            if (
                                this.forms[t].appearance.style.includes(
                                    'material'
                                ) ||
                                this.forms[t].appearance.theme_design
                            ) {
                                const e =
                                        '.globo-form-input input, .globo-form-input textarea, .globo-form-input select',
                                    t =
                                        '.globo-form-input .gfb__dropdown-button';
                                a.querySelectorAll(e)?.forEach(e => {
                                    e.addEventListener('focus', function () {
                                        i.classList.add('gfb__label__shink');
                                    }),
                                        e.addEventListener(
                                            'focusout',
                                            function (e) {
                                                i.classList.remove(
                                                    'gfb__label__shink'
                                                );
                                            }
                                        );
                                }),
                                    a.querySelectorAll(e)?.forEach(e => {
                                        e.addEventListener(
                                            'change',
                                            function () {
                                                this.value
                                                    ? (i?.classList.add(
                                                          'gfb__label__filled'
                                                      ),
                                                      this.matches(
                                                          ':autofill'
                                                      ) &&
                                                          i.classList.add(
                                                              'gfb__label__autofill'
                                                          ))
                                                    : (i.classList.remove(
                                                          'gfb__label__filled'
                                                      ),
                                                      i.classList.remove(
                                                          'gfb__label__autofill'
                                                      ));
                                            }
                                        );
                                    }),
                                    a
                                        .querySelector(t)
                                        ?.addEventListener(
                                            'focus',
                                            function () {
                                                i.classList.add(
                                                    'gfb__label__shink'
                                                );
                                            }
                                        ),
                                    a
                                        .querySelector(t)
                                        ?.addEventListener(
                                            'focusout',
                                            function (e) {
                                                i.classList.remove(
                                                    'gfb__label__shink'
                                                );
                                            }
                                        ),
                                    a.querySelectorAll(t)?.forEach(e => {
                                        var t = e.querySelectorAll('input');
                                        t.forEach(e => {
                                            e.addEventListener(
                                                'change',
                                                function () {
                                                    let e = Array.from(t).some(
                                                        e => e.checked
                                                    );
                                                    e
                                                        ? i.classList.add(
                                                              'gfb__label__filled'
                                                          )
                                                        : i.classList.remove(
                                                              'gfb__label__filled'
                                                          );
                                                }
                                            );
                                        });
                                    }),
                                    a
                                        .querySelectorAll('.globo-form-icon')
                                        ?.forEach(e => {
                                            e.closest('.globo-form-control')
                                                .querySelector('.globo-label')
                                                .classList.add(
                                                    'gfb__label--icon'
                                                );
                                        }),
                                    setTimeout(() => {
                                        a.querySelectorAll(
                                            'input[data-type="phone"]'
                                        )?.forEach(e => {
                                            e.hasAttribute('validate') &&
                                                e
                                                    .closest(
                                                        '.globo-form-control'
                                                    )
                                                    .querySelector(
                                                        '.globo-label'
                                                    )
                                                    .classList.add(
                                                        'gfb__label--phone'
                                                    );
                                        });
                                    }, 100);
                            }
                        }
                        (e.querySelector('[name="_keyLabel"]').value =
                            JSON.stringify(r)),
                            (e.querySelector('[name="page[title]"]').value =
                                this.page?.title),
                            (e.querySelector('[name="page[href]"]').value =
                                this.page?.href),
                            this.customer &&
                                (e.querySelector('[name="customer[id]"]') &&
                                    (e.querySelector(
                                        '[name="customer[id]"]'
                                    ).value = this.customer.id),
                                e.querySelector('[name="customer[email]"]') &&
                                    (e.querySelector(
                                        '[name="customer[email]"]'
                                    ).value = this.customer.email),
                                e.querySelector('[name="customer[name]"]') &&
                                    (e.querySelector(
                                        '[name="customer[name]"]'
                                    ).value = this.customer.name));
                    },
                    handleRequireLogin: function (e) {
                        const t = this.forms[e].publish;
                        if (!t || !t.requiredLogin) return;
                        if (Globo.FormBuilder.customer?.id) return;
                        const o = document.querySelectorAll(
                            '.globo-form-id-' + e
                        );
                        o &&
                            o.forEach(function (e) {
                                if (e.querySelector('.globo-form-app')) {
                                    const o = e.querySelectorAll(
                                        '.form-container-overlayboxs'
                                    );
                                    if (
                                        (o &&
                                            o.forEach(function (e) {
                                                e.remove();
                                            }),
                                        t.requiredLogin)
                                    ) {
                                        e.classList.add(
                                            'globo_required_login_form'
                                        );
                                        const o =
                                            '<div class="form-container-overlayboxs"><div class="form-overlay-box">' +
                                            (0, r.pw)(t.requiredLoginMessage) +
                                            '</div></div>';
                                        e.querySelector(
                                            '.globo-form-app'
                                        ).innerHTML += o;
                                    } else
                                        e.classList.remove(
                                            'globo_required_login_form'
                                        );
                                }
                            });
                    },
                    handleLightBox: function (e, t) {
                        const o = e.closest('.globo-form-publish-modal');
                        if (
                            o &&
                            (e
                                .querySelector('.header.dismiss')
                                ?.classList.remove('hidden'),
                            o.classList.contains('lightbox'))
                        ) {
                            const e = this.forms[t].publish;
                            switch (e.selectTime) {
                                case 'none':
                                    var r = 0;
                                    break;
                                case 'weeks':
                                    r =
                                        void 0 !== e.setCookieWeeks
                                            ? 7 * parseInt(e.setCookieWeeks)
                                            : 7;
                                    break;
                                case 'days':
                                    r =
                                        void 0 !== e.setCookie
                                            ? parseInt(e.setCookie)
                                            : 1;
                                    break;
                                case 'hours':
                                    r =
                                        void 0 !== e.setCookieHours
                                            ? parseInt(e.setCookieHours) / 12
                                            : 1 / 12;
                                    break;
                                default:
                                    r = 365;
                            }
                            d.get(
                                'globo-form-lightbox-' +
                                    o.getAttribute('data-id')
                            ) != r && o.classList.remove('hidden');
                        }
                    },
                    handleSwatchTooltip: function (e) {
                        const t = t => {
                            const o = t.target.closest(
                                '.gfb__color-swatches-label'
                            );
                            if (o) {
                                const t = o,
                                    r = e.querySelector('.panels'),
                                    a = t.querySelector(
                                        '.gfb__color-swatches__tooltip'
                                    ),
                                    i = t.getBoundingClientRect().width,
                                    l = a.getBoundingClientRect().width,
                                    s = t.getBoundingClientRect(),
                                    n = r.getBoundingClientRect(),
                                    c = s.left - n.left,
                                    d =
                                        window.innerWidth -
                                        s.right -
                                        (window.innerWidth - n.right),
                                    u = l / 2,
                                    m = i / 2;
                                u - m > c
                                    ? ((a.style.left = `calc(50% + ${
                                          u - m
                                      }px)`),
                                      a.style.setProperty(
                                          '--gfb-color-swatches-tooltip-arrow',
                                          `calc(50% - ${u - m}px)`
                                      ))
                                    : u - m > d
                                    ? ((a.style.left = `calc(50% - ${
                                          u - m
                                      }px)`),
                                      a.style.setProperty(
                                          '--gfb-color-swatches-tooltip-arrow',
                                          `calc(50% + ${u - m}px)`
                                      ))
                                    : (a.style.left = '50%');
                            }
                        };
                        e.querySelectorAll(
                            '.gfb__color-swatches-label'
                        ).forEach(e => {
                            e.addEventListener('mouseover', t);
                        });
                    },
                    handleColorPicker: function (e) {
                        e.parentNode.querySelector('input[name]').value =
                            e.value;
                    },
                    handleSelect: function (e, t) {
                        e.querySelectorAll('.globo-form-control').forEach(t => {
                            const o = t.querySelector(
                                    '.gfb__dropdown.gfb__image-dropdown'
                                ),
                                r = t.querySelector(
                                    '.globo-form-input .gfb__dropdown-button'
                                );
                            if (r && o) {
                                const a = () => {
                                        o.classList.toggle('gfb__expanded');
                                    },
                                    i = e => {
                                        r.contains(e.target)
                                            ? a()
                                            : t.contains(e.target) ||
                                              o.classList.remove(
                                                  'gfb__expanded'
                                              );
                                    };
                                document.addEventListener('click', i),
                                    e.addEventListener('remove', () => {
                                        document.removeEventListener(
                                            'click',
                                            i
                                        );
                                    });
                            }
                        });
                    },
                    handleSelectOptionSelectImage: function (e) {
                        const t = e.closest('.gfb__dropdown'),
                            o = t.querySelector('.gfb__dropdown-button__value');
                        t.previousElementSibling.classList.remove(
                            'gfb__label__shink'
                        );
                        ('radio' !== e.type && 'checkbox' !== e.type) ||
                            (e => {
                                const r = t.querySelectorAll(
                                        `input[type="${e}"]:checked`
                                    ),
                                    a = Array.from(r).map(e => e.value);
                                (o.textContent =
                                    r.length > 0
                                        ? a.join(', ')
                                        : o.getAttribute('data-value')),
                                    'radio' === e &&
                                        r.length > 0 &&
                                        t.classList.remove('gfb__expanded'),
                                    'checkbox' === e &&
                                        0 == r.length &&
                                        t.classList.remove('gfb__expanded');
                            })(e.type);
                    },
                    handleSignature: async function (e, t) {
                        const r = await o.e(87).then(o.bind(o, 2436)),
                            { default: a } = r;
                        a.init(e, t);
                    },
                    setupProducts: async function (e, t) {
                        const r = await o.e(964).then(o.bind(o, 8265)),
                            { default: a } = r;
                        a.init(e, t),
                            Object.assign(Globo.FormBuilder, {
                                product: a,
                            });
                    },
                };
        },
    },
]);
