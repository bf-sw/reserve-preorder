var __accessCheck = (obj, member, msg) => {
        if (!member.has(obj)) throw TypeError('Cannot ' + msg);
    },
    __privateGet = (obj, member, getter) => (
        __accessCheck(obj, member, 'read from private field'),
        getter ? getter.call(obj) : member.get(obj)
    ),
    __privateAdd = (obj, member, value) => {
        if (member.has(obj))
            throw TypeError(
                'Cannot add the same private member more than once'
            );
        member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
    },
    __privateSet = (obj, member, value, setter) => (
        __accessCheck(obj, member, 'write to private field'),
        setter ? setter.call(obj, value) : member.set(obj, value),
        value
    ),
    __privateMethod = (obj, member, method) => (
        __accessCheck(obj, member, 'access private method'), method
    );
import { timeline } from './vendor.min.js';
import { EffectCarousel } from './theme.js';
var AnnouncementBar = class extends EffectCarousel {
    _transitionTo(fromSlide, toSlide) {
        timeline([
            [
                fromSlide,
                {
                    transform: ['translateY(0)', 'translateY(-5px)'],
                    opacity: [1, 0],
                    visibility: ['visible', 'hidden'],
                },
                { duration: 0.2 },
            ],
            [
                toSlide,
                {
                    transform: ['translateY(5px)', 'translateY(0)'],
                    opacity: [0, 1],
                    visibility: ['hidden', 'visible'],
                },
                { duration: 0.2 },
            ],
        ]);
    }
};
window.customElements.get('announcement-bar') ||
    window.customElements.define('announcement-bar', AnnouncementBar);
var SplitCursor = class extends HTMLElement {
    connectedCallback() {
        (this._parentSection = this.closest('.shopify-section')),
            (this._dragging = !1),
            (this._offsetX = this._currentX = 0),
            this._parentSection.addEventListener(
                'pointerdown',
                this._onPointerDown.bind(this)
            ),
            this._parentSection.addEventListener(
                'pointermove',
                this._onPointerMove.bind(this)
            ),
            this._parentSection.addEventListener(
                'pointerup',
                this._onPointerUp.bind(this)
            ),
            this._recalculateOffset(),
            window.addEventListener(
                'resize',
                this._recalculateOffset.bind(this)
            );
    }
    get minOffset() {
        return (
            -this.offsetLeft - (document.dir === 'rtl' ? this.clientWidth : 0)
        );
    }
    get maxOffset() {
        return this.offsetParent.clientWidth + this.minOffset;
    }
    _onPointerDown(event) {
        (event.target === this || this.contains(event.target)) &&
            ((this._initialX = event.clientX - this._offsetX),
            (this._dragging = !0));
    }
    _onPointerMove(event) {
        this._dragging &&
            ((this._currentX = Math.min(
                Math.max(event.clientX - this._initialX, this.minOffset),
                this.maxOffset
            )),
            (this._offsetX = this._currentX),
            this._parentSection.style.setProperty(
                '--clip-path-offset',
                `${this._currentX.toFixed(1)}px`
            ));
    }
    _onPointerUp() {
        this._dragging = !1;
    }
    _recalculateOffset() {
        this._parentSection.style.setProperty(
            '--clip-path-offset',
            `${Math.min(
                Math.max(this.minOffset, this._currentX.toFixed(1)),
                this.maxOffset
            )}px`
        );
    }
};
window.customElements.get('split-cursor') ||
    window.customElements.define('split-cursor', SplitCursor);
import {
    timeline as timeline2,
    inView,
} from './vendor.min.js';
var CollectionList = class extends HTMLElement {
    connectedCallback() {
        window.matchMedia('(prefers-reduced-motion: no-preference)').matches &&
            inView(this, this._reveal.bind(this), { margin: '-100px' });
    }
    _reveal() {
        const toReveal = Array.from(this.querySelectorAll('[reveal-js]'));
        timeline2([
            [toReveal, { opacity: 1 }, { duration: 0 }],
            [
                toReveal.map(item => item.querySelector('img, svg')),
                { opacity: [0, 1], transform: ['scale(1.03)', 'auto'] },
                { duration: 0.2 },
            ],
            [
                toReveal.map(item =>
                    item.querySelector('.collection-card__content-wrapper')
                ),
                { opacity: [0, 1] },
                { duration: 0.2 },
            ],
        ]);
    }
};
window.customElements.get('collection-list') ||
    window.customElements.define('collection-list', CollectionList);
import { Delegate } from './vendor.min.js';
var AccountLogin = class extends HTMLElement {
    connectedCallback() {
        (this.recoverForm = this.querySelector('#recover')),
            (this.loginForm = this.querySelector('#login')),
            window.location.hash === '#recover' && this._switchForms(),
            new Delegate(this).on(
                'click',
                '[href="#recover"], [href="#login"]',
                this._switchForms.bind(this)
            );
    }
    _switchForms(event) {
        event && event.preventDefault(),
            (this.recoverForm.hidden = !this.recoverForm.hidden),
            (this.loginForm.hidden = !this.loginForm.hidden);
    }
};
window.customElements.get('account-login') ||
    window.customElements.define('account-login', AccountLogin);
import {
    animate,
    timeline as timeline3,
    stagger,
    Delegate as Delegate2,
} from './vendor.min.js';
import {
    AnimatedDetails,
    EffectCarousel as EffectCarousel2,
    Drawer,
    throttle,
} from './theme.js';
var reduceMenuAnimation = JSON.parse('false'),
    StoreHeader = class extends HTMLElement {
        connectedCallback() {
            this.hasAttribute('hide-on-scroll') &&
                window.matchMedia('(prefers-reduced-motion: no-preference)')
                    .matches &&
                ((this._lastScrollTop = 0),
                (this._accumulatedScroll = 0),
                (this._isVisible = !0),
                (this._hasSwitchedToSticky = !1),
                window.addEventListener(
                    'scroll',
                    throttle(this._onScroll.bind(this))
                )),
                this.addEventListener(
                    'toggle',
                    this._checkTransparency.bind(this),
                    { capture: !0 }
                ),
                window.addEventListener('pageshow', event => {
                    event.persisted &&
                        (this.classList.remove('is-filled'),
                        this._setupTransparentHeader());
                }),
                this._setupTransparentHeader(),
                this.hasAttribute('sticky') &&
                    Shopify.designMode &&
                    (document.addEventListener(
                        'shopify:section:load',
                        this._setupTransparentHeader.bind(this)
                    ),
                    document.addEventListener(
                        'shopify:section:unload',
                        this._setupTransparentHeader.bind(this)
                    ),
                    document.addEventListener(
                        'shopify:section:reorder',
                        this._setupTransparentHeader.bind(this)
                    ));
        }
        async hide() {
            this._isVisible &&
                ((this._isVisible = !1),
                document.documentElement.style.setProperty(
                    '--header-is-visible',
                    '0'
                ),
                await animate(
                    this,
                    { transform: ['translateY(0)', 'translateY(-100%)'] },
                    { duration: 0.2, easing: 'ease' }
                ).finished,
                (this.closest('.shopify-section').style.visibility = 'hidden'));
        }
        show() {
            this._isVisible ||
                ((this.closest('.shopify-section').style.visibility =
                    'visible'),
                document.documentElement.style.setProperty(
                    '--header-is-visible',
                    '1'
                ),
                animate(
                    this,
                    { transform: ['translateY(-100%)', 'translateY(0)'] },
                    { duration: 0.2, easing: 'ease' }
                ),
                (this._accumulatedScroll = 0),
                (this._isVisible = !0));
        }
        _onScroll() {
            window.scrollY < 0 ||
                ((this._accumulatedScroll = Math.max(
                    0,
                    this._accumulatedScroll +
                        (window.scrollY - this._lastScrollTop)
                )),
                window.scrollY < this._lastScrollTop
                    ? this.show()
                    : this._accumulatedScroll >
                          parseInt(this.getAttribute('hide-on-scroll')) &&
                      this.querySelectorAll('[open]').length === 0 &&
                      this.hide(),
                (this._lastScrollTop = window.scrollY));
        }
        _checkTransparency() {
            let hasFallbackScrollDetection = !1;
            CSS.supports('selector(:has(> *))') &&
            this.hasAttribute('sticky') &&
            !this.hasAttribute('hide-on-scroll') &&
            this.hasAttribute('allow-transparency')
                ? this.querySelectorAll('[open]').length > 0
                    ? this.classList.add('is-filled')
                    : window.scrollY >= 500 && !this._hasSwitchedToSticky
                    ? ((this._hasSwitchedToSticky = !0),
                      this.classList.add('is-filled'),
                      animate(
                          this,
                          { transform: ['translateY(-100%)', 'translateY(0)'] },
                          { duration: 0.15, easing: 'ease' }
                      ))
                    : window.scrollY < 500 &&
                      (this._hasSwitchedToSticky
                          ? ((this._hasSwitchedToSticky = !1),
                            animate(
                                this,
                                {
                                    transform: [
                                        'translateY(0)',
                                        'translateY(-100%)',
                                    ],
                                },
                                { duration: 0.15, easing: 'ease' }
                            ).finished.then(() => {
                                (this.style.transform = null),
                                    this.classList.remove('is-filled');
                            }))
                          : this.getAnimations().length === 0 &&
                            this.classList.remove('is-filled'))
                : ((hasFallbackScrollDetection = window.scrollY > 20),
                  this.classList.toggle(
                      'is-filled',
                      !this.hasAttribute('allow-transparency') ||
                          this.querySelectorAll('[open]').length > 0 ||
                          hasFallbackScrollDetection
                  ));
        }
        _setupTransparentHeader() {
            document.querySelector(
                '.shopify-section:first-child [allow-transparent-header]'
            )
                ? (this.setAttribute('allow-transparency', ''),
                  this.addEventListener(
                      'mouseenter',
                      this._checkTransparency.bind(this)
                  ),
                  this.addEventListener(
                      'mouseleave',
                      this._checkTransparency.bind(this)
                  ),
                  this.hasAttribute('sticky') &&
                      window.addEventListener(
                          'scroll',
                          throttle(this._checkTransparency.bind(this))
                      ),
                  this._checkTransparency())
                : this.removeAttribute('allow-transparency');
        }
    },
    DropdownDisclosure = class _DropdownDisclosure extends AnimatedDetails {
        constructor() {
            super(),
                (this._detectClickOutsideListener =
                    this._detectClickOutside.bind(this)),
                (this._detectEscKeyboardListener =
                    this._detectEscKeyboard.bind(this)),
                (this._detectFocusOutListener =
                    this._detectFocusOut.bind(this)),
                (this._detectHoverListener = this._detectHover.bind(this)),
                (this._hoverTimer = null),
                this.addEventListener(
                    'mouseover',
                    this._detectHoverListener.bind(this)
                ),
                this.addEventListener(
                    'mouseout',
                    this._detectHoverListener.bind(this)
                );
        }
        get trigger() {
            return window.matchMedia('screen and (pointer: fine)').matches
                ? this.getAttribute('trigger')
                : 'click';
        }
        get mouseOverDelayTolerance() {
            return 250;
        }
        _onSummaryClicked(event) {
            this.trigger === 'hover'
                ? (event.preventDefault(),
                  event.currentTarget.hasAttribute('data-url') &&
                      (window.location.href =
                          event.currentTarget.getAttribute('data-url')))
                : super._onSummaryClicked(event);
        }
        async _transition(value) {
            if (value) {
                this.setAttribute('open', ''),
                    document.addEventListener(
                        'click',
                        this._detectClickOutsideListener
                    ),
                    document.addEventListener(
                        'keydown',
                        this._detectEscKeyboardListener
                    ),
                    document.addEventListener(
                        'focusout',
                        this._detectFocusOutListener
                    );
                const openSiblings = Array.from(
                    this.closest('ul').querySelectorAll('[open]')
                ).filter(item => item !== this);
                openSiblings.forEach(sibling => (sibling.open = !1)),
                    await this._transitionIn(openSiblings.length > 0);
            } else
                document.removeEventListener(
                    'click',
                    this._detectClickOutsideListener
                ),
                    document.removeEventListener(
                        'keydown',
                        this._detectEscKeyboardListener
                    ),
                    document.removeEventListener(
                        'focusout',
                        this._detectFocusOutListener
                    ),
                    await this._transitionOut(),
                    this.removeAttribute('open');
        }
        _transitionIn(hasOpenSiblings = !1) {
            const timelineSequence = [
                [this.contentElement, { opacity: 1 }, { duration: 0.2 }],
            ];
            return (
                window.matchMedia('(prefers-reduced-motion: no-preference)')
                    .matches &&
                    !reduceMenuAnimation &&
                    timelineSequence.push([
                        this.contentElement.querySelectorAll(
                            ':scope > ul > li'
                        ),
                        {
                            opacity: [0, 1],
                            transform: ['translateY(-10px)', 'translateY(0)'],
                        },
                        { delay: stagger(0.025), at: '-0.1', duration: 0.2 },
                    ]),
                timeline3(timelineSequence, {
                    delay: hasOpenSiblings > 0 ? 0.1 : 0,
                }).finished
            );
        }
        _transitionOut() {
            return timeline3([
                [this.contentElement, { opacity: 0 }, { duration: 0.2 }],
            ]).finished;
        }
        _detectClickOutside(event) {
            this.trigger === 'click' &&
                !this.contains(event.target) &&
                !(
                    event.target.closest('details') instanceof
                    _DropdownDisclosure
                ) &&
                (this.open = !1);
        }
        _detectHover(event) {
            this.trigger === 'hover' &&
                (event.type === 'mouseover'
                    ? ((this.open = !0), clearTimeout(this._hoverTimer))
                    : (this._hoverTimer = setTimeout(
                          () => (this.open = !1),
                          this.mouseOverDelayTolerance
                      )));
        }
        _detectEscKeyboard(event) {
            if (event.code === 'Escape') {
                const targetMenu = event.target.closest('details[open]');
                targetMenu && (targetMenu.open = !1);
            }
        }
        _detectFocusOut(event) {
            event.relatedTarget &&
                !this.contains(event.relatedTarget) &&
                (this.open = !1);
        }
    },
    MegaMenuDisclosure = class extends DropdownDisclosure {
        constructor() {
            super(),
                this.addEventListener(
                    'pointerover',
                    this._preloadImages.bind(this)
                );
        }
        get mouseOverDelayTolerance() {
            return 500;
        }
        _transitionIn(hasOpenSiblings) {
            const timelineSequence = [
                    [this.contentElement, { opacity: 1 }, { duration: 0.2 }],
                    'mega-menu',
                ],
                contentDelay = hasOpenSiblings ? 0.1 : 0;
            return (
                window.matchMedia('(prefers-reduced-motion: no-preference)')
                    .matches &&
                    !reduceMenuAnimation &&
                    (this.contentElement
                        .querySelectorAll('.mega-menu__promo')
                        .forEach(promo => {
                            timelineSequence.push(
                                [
                                    promo,
                                    { opacity: [0, 1] },
                                    {
                                        duration: 0.25,
                                        delay: contentDelay,
                                        at: 'mega-menu',
                                    },
                                ],
                                'mega-menu-promo'
                            );
                        }),
                    this.contentElement
                        .querySelectorAll('.mega-menu__nav > li')
                        .forEach(column => {
                            timelineSequence.push([
                                column.querySelectorAll(
                                    ':scope > :first-child, :scope li'
                                ),
                                {
                                    opacity: [0, 1],
                                    transform: [
                                        'translateY(-10px)',
                                        'translateY(0)',
                                    ],
                                },
                                {
                                    easing: 'ease',
                                    delay: stagger(0.025, {
                                        start: contentDelay,
                                    }),
                                    at: 'mega-menu',
                                    duration: 0.2,
                                },
                            ]);
                        })),
                timeline3(timelineSequence).finished
            );
        }
        _preloadImages() {
            Array.from(this.querySelectorAll('img[loading="lazy"]')).forEach(
                image => image.setAttribute('loading', 'eager')
            );
        }
    },
    MegaMenuPromoCarousel = class extends EffectCarousel2 {
        connectedCallback() {
            super.connectedCallback(),
                this.nextElementSibling &&
                    this.addEventListener('carousel:select', event =>
                        this._updateControlsColor(event.detail.slide)
                    ),
                this._updateControlsColor(this.items[this.selectedIndex]);
        }
        _updateControlsColor(slide) {
            const extractFrom = slide.classList.contains('content-over-media')
                ? slide
                : slide.firstElementChild;
            this.nextElementSibling.style.setProperty(
                '--text-color',
                extractFrom.style.getPropertyValue('--text-color')
            );
        }
    },
    NavigationDrawer = class extends Drawer {
        constructor() {
            super(),
                new Delegate2(this).on(
                    'click',
                    'button[data-panel]',
                    this._onPanelButtonClick.bind(this)
                ),
                (this._isTransitioning = !1),
                this.addEventListener('dialog:after-hide', () => {
                    this.reinitializeDrawer();
                });
        }
        get openFrom() {
            return window.matchMedia('(max-width: 699px)').matches
                ? this.getAttribute('mobile-opening')
                : super.openFrom;
        }
        switchToPanel(panelIndex, linkListIndex = null) {
            const panels = this.querySelectorAll('.panel');
            let panelToHideTransform,
                panelToShowTransform,
                panelToHide =
                    linkListIndex !== null
                        ? panels[parseInt(panelIndex) - 1]
                        : panels[parseInt(panelIndex) + 1],
                panelToShow = panels[panelIndex],
                linkLists = panelToShow.querySelectorAll('.panel__wrapper'),
                timelineSequence = [];
            document.dir === 'rtl'
                ? ((panelToHideTransform =
                      linkListIndex !== null
                          ? ['translateX(0%)', 'translateX(100%)']
                          : ['translateX(0%)', 'translateX(-100%)']),
                  (panelToShowTransform =
                      linkListIndex !== null
                          ? ['translateX(-100%)', 'translateX(0%)']
                          : ['translateX(100%)', 'translateX(0%)']))
                : ((panelToHideTransform =
                      linkListIndex !== null
                          ? ['translateX(0%)', 'translateX(-100%)']
                          : ['translateX(0%)', 'translateX(100%)']),
                  (panelToShowTransform =
                      linkListIndex !== null
                          ? ['translateX(100%)', 'translateX(0%)']
                          : ['translateX(-100%)', 'translateX(0%)'])),
                timelineSequence.push(
                    [
                        panelToHide,
                        {
                            transform: panelToHideTransform,
                            opacity: [1, 0],
                            visibility: ['visible', 'hidden'],
                        },
                        {
                            duration: 0.3,
                            opacity: { at: '+0.3' },
                            transform: { at: '+0.3' },
                        },
                    ],
                    'panelHidden',
                    [
                        panelToShow,
                        {
                            opacity: [0, 1],
                            visibility: ['hidden', 'visible'],
                            transform: panelToShowTransform,
                        },
                        { at: '<', transform: { duration: 0.3 } },
                    ]
                ),
                linkListIndex !== null &&
                    timelineSequence.push(
                        this.switchLinkList(linkLists, linkListIndex)
                    ),
                timeline3(timelineSequence);
        }
        showPanel(panelIndex, linkListIndex = null) {
            const panels = this.querySelectorAll('.panel');
            let timelineSequence = [],
                panelToShow = panels[panelIndex],
                linkLists = panelToShow.querySelectorAll('.panel__wrapper');
            !panelToShow.hasAttribute('open') &&
                !this._isTransitioning &&
                ((this._isTransitioning = !0),
                timelineSequence.push(
                    [
                        this,
                        {
                            width: [
                                this.offsetWidth + 'px',
                                (this.offsetWidth -
                                    parseInt(
                                        window
                                            .getComputedStyle(this)
                                            .getPropertyValue('padding')
                                    )) *
                                    2 +
                                    'px',
                            ],
                        },
                        { duration: 0.2 },
                    ],
                    [
                        panelToShow,
                        { opacity: [0, 1], visibility: ['hidden', 'visible'] },
                        { at: '<' },
                    ]
                ),
                timelineSequence.push(
                    this.switchLinkList(linkLists, linkListIndex)
                )),
                this.previousLinkIndex &&
                    this.previousLinkIndex !== linkListIndex &&
                    timelineSequence.push([
                        linkLists[this.previousLinkIndex],
                        { opacity: [1, 0], visibility: ['visible', 'hidden'] },
                        { duration: 0.2 },
                    ]),
                timeline3(timelineSequence).finished.then(() => {
                    this.previousLinkIndex &&
                        this.previousLinkIndex !== linkListIndex &&
                        linkLists[this.previousLinkIndex].removeAttribute(
                            'style'
                        ),
                        panelToShow.hasAttribute('open') &&
                            this.previousLinkIndex !== linkListIndex &&
                            timeline3([
                                this.switchLinkList(linkLists, linkListIndex),
                            ]),
                        (this.previousLinkIndex = linkListIndex),
                        panelToShow.setAttribute('open', ''),
                        (this._isTransitioning = !1);
                });
        }
        switchLinkList(linkLists, linkListIndex) {
            return (
                Array.from(linkLists).forEach(item => {
                    item.setAttribute('hidden', '');
                }),
                linkLists[linkListIndex].removeAttribute('hidden'),
                [
                    linkLists[linkListIndex].querySelectorAll('li'),
                    {
                        opacity: [0, 1],
                        visibility: ['hidden', 'visible'],
                        transform: ['translateY(-10px)', 'translateY(0)'],
                    },
                    {
                        easing: 'ease',
                        duration: 0.2,
                        at: '-0.15',
                        delay: stagger(0.025, { start: 0.1 }),
                    },
                ]
            );
        }
        reinitializeDrawer() {
            if (
                this.hasAttribute('mega-menu') &&
                window.matchMedia('(min-width:1150px)').matches
            )
                this.style.removeProperty('width'), this.setExpanded();
            else {
                const firstPanel = this.querySelector('.panel:first-child');
                (firstPanel.style.opacity = '1'),
                    (firstPanel.style.visibility = 'visible'),
                    (firstPanel.style.transform = 'translateX(0%)');
            }
            Array.from(
                this.querySelectorAll('.panel:not(:first-child)')
            ).forEach(item => {
                this.hasAttribute('mega-menu') && item.removeAttribute('open'),
                    (item.style.opacity = '0'),
                    (item.style.visibility = 'hidden'),
                    Array.from(
                        item.querySelectorAll('.panel__wrapper')
                    ).forEach(list => list.setAttribute('hidden', ''));
            });
        }
        setExpanded(target) {
            Array.from(this.querySelectorAll('button[data-panel]')).forEach(
                item => {
                    item.setAttribute('aria-expanded', 'false');
                }
            ),
                target && target.setAttribute('aria-expanded', 'true');
        }
        _onPanelButtonClick(event, target) {
            this.hasAttribute('mega-menu') &&
            window.matchMedia('(min-width:1150px)').matches
                ? (this.setExpanded(target),
                  this.showPanel(
                      ...target.getAttribute('data-panel').split('-')
                  ))
                : this.switchToPanel(
                      ...target.getAttribute('data-panel').split('-')
                  );
        }
    };
window.customElements.get('store-header') ||
    window.customElements.define('store-header', StoreHeader),
    window.customElements.get('dropdown-disclosure') ||
        window.customElements.define(
            'dropdown-disclosure',
            DropdownDisclosure,
            { extends: 'details' }
        ),
    window.customElements.get('mega-menu-disclosure') ||
        window.customElements.define(
            'mega-menu-disclosure',
            MegaMenuDisclosure,
            { extends: 'details' }
        ),
    window.customElements.get('mega-menu-promo-carousel') ||
        window.customElements.define(
            'mega-menu-promo-carousel',
            MegaMenuPromoCarousel
        ),
    window.customElements.get('navigation-drawer') ||
        window.customElements.define('navigation-drawer', NavigationDrawer);
import {
    animate as motionAnimate,
    scroll,
} from './vendor.min.js';
var FeatureChart = class extends HTMLElement {
    connectedCallback() {
        if (
            ((this.viewButtonElement = this.querySelector(
                '[data-action="toggle-rows"]'
            )),
            (this.featureChartTable = this.querySelector(
                '.feature-chart__table'
            )),
            (this.featureChartRows = Array.from(
                this.featureChartTable.childNodes
            )),
            (this.featureProductRow = this.querySelector(
                '.feature-chart__table-row--product'
            )),
            (this.featureChartSticky = this.querySelector(
                '.feature-chart__table-row--sticky'
            )),
            this.viewButtonElement &&
                this.viewButtonElement.addEventListener(
                    'click',
                    this._toggleRows.bind(this)
                ),
            this.featureChartSticky)
        ) {
            (this.featureChartSticky.style.width = `${this.featureChartTable.scrollWidth}px`),
                this.featureChartTable.addEventListener('scroll', event => {
                    this.featureChartSticky.style.marginLeft =
                        -1 * event.target.scrollLeft + 'px';
                }),
                new ResizeObserver(entries => {
                    this.featureChartSticky.style.width = `${entries[0].contentRect.width}px`;
                }).observe(this.featureChartTable);
            const offset = getComputedStyle(this).scrollPaddingTop;
            scroll(
                ({ y }) => {
                    y.current >=
                        y.targetOffset +
                            this.featureProductRow.clientHeight / 2 &&
                    y.progress < 0.85
                        ? this.featureChartSticky.classList.add('is-visible')
                        : this.featureChartSticky.classList.remove(
                              'is-visible'
                          );
                },
                {
                    target: this.featureChartTable,
                    offset: [`${offset} start`, `end ${offset}`],
                }
            );
        }
    }
    _toggleRows() {
        this.classList.contains('is-expanded')
            ? this._hideRows()
            : this._showRows();
    }
    async _showRows() {
        const fromHeight = this.featureChartTable.clientHeight;
        this.featureChartRows.forEach(row => {
            row.hidden = !1;
        }),
            (this.viewButtonElement.querySelector(
                '.feature-chart__toggle-text'
            ).innerText =
                this.viewButtonElement.getAttribute('data-view-less')),
            this.classList.add('is-expanded'),
            await motionAnimate(this.featureChartTable, {
                height: [
                    `${fromHeight}px`,
                    `${this.featureChartTable.clientHeight}px`,
                ],
            }).finished,
            (this.featureChartTable.style.height = 'auto');
    }
    async _hideRows() {
        let fromHeight = this.featureChartTable.clientHeight,
            toHeight = 0;
        this.featureChartRows
            .slice(0, parseInt(this.getAttribute('max-rows')))
            .forEach(row => {
                toHeight += row.clientHeight;
            }),
            (this.viewButtonElement.querySelector(
                '.feature-chart__toggle-text'
            ).innerText =
                this.viewButtonElement.getAttribute('data-view-more')),
            this.classList.remove('is-expanded'),
            await motionAnimate(this.featureChartTable, {
                height: [`${fromHeight}px`, `${toHeight}px`],
            }).finished,
            this.featureChartRows
                .slice(parseInt(this.getAttribute('max-rows')))
                .forEach(row => (row.hidden = !0)),
            (this.featureChartTable.style.height = 'auto');
    }
};
window.customElements.get('feature-chart') ||
    window.customElements.define('feature-chart', FeatureChart);
import {
    scroll as scroll2,
    timeline as timeline4,
    animate as animate2,
    inView as inView2,
} from './vendor.min.js';
import {
    imageLoaded,
    getHeadingKeyframe,
} from './theme.js';
var ImageBanner = class extends HTMLElement {
    connectedCallback() {
        this.parallax &&
            window.matchMedia('(prefers-reduced-motion: no-preference)')
                .matches &&
            this._setupParallax(),
            inView2(this, async () => {
                await imageLoaded(
                    Array.from(
                        this.querySelectorAll(
                            ':scope > :is(img, video, iframe, svg, video-media)'
                        )
                    )
                );
                const headings = Array.from(
                    this.querySelectorAll('[reveal-on-scroll="true"]')
                );
                timeline4([
                    [this, { opacity: [0, 1] }, { duration: 0.25 }],
                    ...headings.map(heading => [
                        ...getHeadingKeyframe(heading),
                    ]),
                ]);
            });
    }
    get parallax() {
        return this.hasAttribute('parallax')
            ? parseFloat(this.getAttribute('parallax'))
            : !1;
    }
    _setupParallax() {
        const media = Array.from(
                this.querySelectorAll(
                    ':scope > :is(img, video, iframe, svg, video-media, picture)'
                )
            ),
            [scale, translate] = [
                1 + this.parallax,
                (this.parallax * 100) / (1 + this.parallax),
            ];
        scroll2(
            animate2(
                media,
                {
                    transform: [
                        `scale(${scale}) translateY(-${translate}%)`,
                        `scale(${scale}) translateY(0)`,
                    ],
                },
                { easing: 'linear' }
            ),
            { target: this, offset: ['start end', 'end start'] }
        );
    }
};
window.customElements.get('image-banner') ||
    window.customElements.define('image-banner', ImageBanner);
import { ScrollArea } from './theme.js';
var ImageLinkBlocks = class extends HTMLElement {
    connectedCallback() {
        (this.items = Array.from(this.children)),
            new ScrollArea(this),
            this.addEventListener('control:prev', this._prev),
            this.addEventListener('control:next', this._next);
    }
    _prev() {
        this.scrollBy({
            left: (document.dir === 'rtl' ? 1 : -1) * this.items[0].clientWidth,
            behavior: 'smooth',
        });
    }
    _next() {
        this.scrollBy({
            left: (document.dir === 'rtl' ? -1 : 1) * this.items[0].clientWidth,
            behavior: 'smooth',
        });
    }
};
window.customElements.get('image-link-blocks') ||
    window.customElements.define('image-link-blocks', ImageLinkBlocks);
import {
    animate as animate3,
    timeline as timeline5,
    inView as inView3,
} from './vendor.min.js';
import {
    getHeadingKeyframe as getHeadingKeyframe2,
    throttle as throttle2,
} from './theme.js';
var ImagesWithTextScrolling = class extends HTMLElement {
    connectedCallback() {
        inView3(this, this._reveal.bind(this)),
            this.hasAttribute('scrolling-experience') &&
                ((this._imageToTransitionItems = Array.from(
                    this.querySelectorAll(
                        '.images-scrolling-desktop__media-wrapper > :not(:first-child)'
                    )
                )),
                (this._mainImage = this.querySelector(
                    '.images-scrolling-desktop__media-wrapper > :first-child'
                )),
                (this._contentItems = Array.from(
                    this.querySelectorAll('.images-scrolling__content')
                )),
                this._imageToTransitionItems.length > 0 &&
                    window.addEventListener(
                        'scroll',
                        throttle2(this._onScroll.bind(this))
                    ));
    }
    _reveal() {
        Array.from(this.querySelectorAll('[reveal-on-scroll="true"]')).forEach(
            heading => {
                animate3(...getHeadingKeyframe2(heading));
            }
        );
    }
    _onScroll() {
        const imageRect = this._mainImage.getBoundingClientRect(),
            imageBottom = imageRect.bottom,
            imageEffect = this.getAttribute('scrolling-experience');
        for (const [index, contentItem] of this._contentItems.entries()) {
            const contentItemRect = contentItem.getBoundingClientRect(),
                image = this._imageToTransitionItems[index - 1],
                content = this._contentItems[index];
            if (
                contentItemRect.top < imageBottom - imageRect.height * 0.15 &&
                contentItemRect.bottom > imageBottom
            ) {
                image &&
                    !image.classList.contains('is-visible') &&
                    (image.classList.add('is-visible'),
                    imageEffect === 'fade'
                        ? timeline5([
                              [
                                  image,
                                  { opacity: [null, 1] },
                                  { duration: 0.2 },
                              ],
                              [
                                  content,
                                  { opacity: [null, 1] },
                                  { duration: 0.45, at: '<' },
                              ],
                          ])
                        : timeline5([
                              [
                                  image,
                                  {
                                      opacity: [null, 1],
                                      clipPath: [
                                          'inset(100% 0 0 0)',
                                          'inset(0 0 0 0)',
                                      ],
                                  },
                                  {
                                      duration: 0.35,
                                      easing: [0.99, 0.01, 0.5, 0.94],
                                      opacity: { duration: 0 },
                                  },
                              ],
                              [
                                  content,
                                  { opacity: [null, 1] },
                                  { duration: 0.45, at: '<' },
                              ],
                          ]));
                break;
            }
            if (contentItemRect.top > imageBottom - imageRect.height * 0.15) {
                image &&
                    image.classList.contains('is-visible') &&
                    (image.classList.remove('is-visible'),
                    imageEffect === 'fade'
                        ? timeline5([
                              [
                                  image,
                                  { opacity: [null, 0] },
                                  { duration: 0.2 },
                              ],
                              [
                                  content,
                                  { opacity: [null, 0] },
                                  { duration: 0.2, at: '<' },
                              ],
                          ])
                        : timeline5([
                              [
                                  image,
                                  {
                                      opacity: [null, 1],
                                      clipPath: [
                                          'inset(0 0 0 0)',
                                          'inset(100% 0 0 0)',
                                      ],
                                  },
                                  {
                                      duration: 0.35,
                                      easing: [0.99, 0.01, 0.5, 0.94],
                                      opacity: { duration: 0 },
                                  },
                              ],
                              [
                                  content,
                                  { opacity: [null, 0] },
                                  { duration: 0.2, at: '<' },
                              ],
                          ]));
                break;
            }
        }
    }
};
window.customElements.get('images-with-text-scrolling') ||
    window.customElements.define(
        'images-with-text-scrolling',
        ImagesWithTextScrolling
    );
import {
    animate as animate4,
    inView as inView4,
} from './vendor.min.js';
var ImpactText = class extends HTMLElement {
    connectedCallback() {
        window.matchMedia('(prefers-reduced-motion: no-preference)').matches &&
            inView4(this, ({ target }) => this._onBecameVisible(target), {
                margin: '-100px',
            });
    }
    async _onBecameVisible(target) {
        if (
            (animate4(
                target,
                {
                    opacity: 1,
                    transform: ['translateY(10px)', 'translateY(0)'],
                },
                { duration: 0.3 }
            ),
            this.hasAttribute('count-up'))
        ) {
            const itemToSearch =
                    this.childElementCount === 0
                        ? this
                        : this.firstElementChild,
                matches = itemToSearch.textContent
                    .trim()
                    .match(/\d+(?:[,. ]\d+)*/);
            if (!matches) return;
            itemToSearch.innerHTML = itemToSearch.textContent.replace(
                /\d+(?:[,. ]\d+)*/,
                `<span>${matches[0]}</span>`
            );
            const numberSpan = itemToSearch.querySelector('span');
            (numberSpan.style.textAlign =
                matches[0] === matches.input ? null : 'end'),
                itemToSearch.classList.contains('text-gradient') ||
                    ((numberSpan.style.display = 'inline-block'),
                    (numberSpan.style.minWidth = `${numberSpan.clientWidth}px`));
            const toReplace = matches[0].replace(/[,\. ]+/, ''),
                charactersMatches = [...matches[0].matchAll(/[,\. ]+/g)];
            await animate4(
                progress => {
                    let formattedString = Math.round(
                        progress * parseInt(toReplace)
                    ).toString();
                    charactersMatches.forEach(character => {
                        formattedString.length >=
                            matches[0].length - character.index &&
                            (formattedString =
                                formattedString.slice(0, character.index) +
                                character[0] +
                                formattedString.slice(character.index));
                    }),
                        (numberSpan.textContent =
                            progress === 1 ? matches[0] : formattedString);
                },
                {
                    duration: parseFloat(this.getAttribute('count-up')),
                    easing: [0.16, 1, 0.3, 1],
                }
            ).finished,
                (numberSpan.style.minWidth = null);
        }
    }
};
window.customElements.get('impact-text') ||
    window.customElements.define('impact-text', ImpactText);
import {
    timeline as timeline6,
    inView as inView5,
} from './vendor.min.js';
var MediaGrid = class extends HTMLElement {
    connectedCallback() {
        (this.items = Array.from(this.children)),
            window.matchMedia('(prefers-reduced-motion: no-preference)')
                .matches && inView5(this, this._onBecameVisible.bind(this));
    }
    _onBecameVisible() {
        const contentElements = this.querySelectorAll(
            '.content-over-media > :not(img, video, iframe, svg, video-media, native-video, external-video)'
        );
        timeline6([
            [
                this.items,
                {
                    opacity: 1,
                    transform: ['translateY(10px)', 'translateY(0)'],
                },
                { duration: 0.3 },
            ],
            [
                contentElements,
                { opacity: [0, 1] },
                { duration: 0.2, at: '+0.1' },
            ],
        ]);
    }
};
window.customElements.get('media-grid') ||
    window.customElements.define('media-grid', MediaGrid);
import {
    animate as animate5,
    timeline as timeline7,
    inView as inView6,
} from './vendor.min.js';
import { imageLoaded as imageLoaded2 } from './theme.js';
var reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: no-preference)'
    ).matches,
    MediaWithText = class extends HTMLElement {
        connectedCallback() {
            reduceMotion &&
                Array.from(
                    this.querySelectorAll('.media-with-text__item')
                ).forEach(item => {
                    inView6(item, observer => this.reveal(observer.target));
                });
        }
        reveal(item) {
            const media = item.querySelector('.media-with-text__media');
            imageLoaded2(media.querySelector('img')).then(() => {
                timeline7([
                    [media, { opacity: [0, 1] }, { duration: 0.3 }],
                    [
                        media.querySelector('img, video-media'),
                        { transform: ['scale(1.05)', 'scale(1)'] },
                        { duration: 0.3, at: '<' },
                    ],
                ]);
            }),
                animate5(
                    item.querySelector('.media-with-text__content > .prose'),
                    { opacity: [0, 1] },
                    { duration: 0.2, delay: 0.3 }
                );
        }
    };
window.customElements.get('media-with-text') ||
    window.customElements.define('media-with-text', MediaWithText);
import {
    timeline as timeline81,
    animate as animate61,
    inView as inView71,
} from './vendor.min.js';
import { getHeadingKeyframe as getHeadingKeyframe31 } from './theme.js';
var TextWithImages = class extends HTMLElement {
        constructor() {
            super(),
                (this._contentCarousel = this.querySelector(
                    'text-with-images-scroll-carousel'
                )),
                this.addEventListener('control:prev', () => {
                    this._contentCarousel.previous();
                }),
                this.addEventListener('control:next', () => {
                    this._contentCarousel.next();
                }),
                Shopify.designMode &&
                    this.addEventListener('shopify:block:select', event => {
                        event.target.hasAttribute('image-id');
                    });
        }
    },
    ImagesWithTextContentList = class extends EffectCarousel3 {
        constructor() {
            super(), inView71(this, this._reveal.bind(this));
        }
        _reveal() {
            animate61(
                ...getHeadingKeyframe31(
                    this.querySelector('[reveal-on-scroll="true"]')
                )
            );
        }
        _transitionTo(
            fromSlide,
            toSlide,
            { direction = 'next', animate: animate91 = !0 } = {}
        ) {
            return (
                fromSlide.classList.remove('is-selected'),
                toSlide.classList.add('is-selected'),
                timeline81(
                    [
                        [
                            fromSlide,
                            {
                                opacity: [1, 0],
                                visibility: ['visible', 'hidden'],
                            },
                        ],
                        [
                            toSlide,
                            {
                                opacity: [0, 1],
                                visibility: ['hidden', 'visible'],
                            },
                        ],
                        [
                            ...getHeadingKeyframe31(
                                toSlide.querySelector(
                                    '[reveal-on-scroll="true"]'
                                ),
                                { at: '<' }
                            ),
                        ],
                    ],
                    {
                        duration: animate91
                            ? parseFloat(this.getAttribute('fade-speed') || 0.5)
                            : 0,
                    }
                ).finished
            );
        }
    };
window.customElements.get('text-with-images') ||
    window.customElements.define('text-with-images', TextWithImages),
    window.customElements.get('text-with-images-scroll-carousel') ||
        window.customElements.define(
            'text-with-images-scroll-carousel',
            ImagesWithTextContentList
        );
import {
    timeline as timeline8,
    animate as animate6,
    stagger as stagger2,
    inView as inView7,
} from './vendor.min.js';
import {
    EffectCarousel as EffectCarousel3,
    imageLoaded as imageLoaded3,
    getHeadingKeyframe as getHeadingKeyframe3,
} from './theme.js';
var MultipleImagesWithText = class extends HTMLElement {
        constructor() {
            super(),
                (this._imageCarousel = this.querySelector(
                    'multiple-images-with-text-image-list'
                )),
                (this._contentCarousel = this.querySelector(
                    'multiple-images-with-text-content-list'
                )),
                this.addEventListener('control:prev', () => {
                    this._imageCarousel.previous(),
                        this._contentCarousel.previous();
                }),
                this.addEventListener('control:next', () => {
                    this._imageCarousel.next(), this._contentCarousel.next();
                }),
                Shopify.designMode &&
                    this.addEventListener('shopify:block:select', event => {
                        event.target.hasAttribute('image-id') &&
                            this._imageCarousel.select(
                                this._imageCarousel.items.findIndex(
                                    item =>
                                        item.id ===
                                        event.target.getAttribute('image-id')
                                )
                            );
                    });
        }
    },
    MultipleImagesWithTextImageList = class extends EffectCarousel3 {
        constructor() {
            super(), inView7(this, this._reveal.bind(this));
        }
        async _reveal() {
            await imageLoaded3(this.querySelectorAll('img')),
                this.getAttribute('layout') === 'stacked'
                    ? timeline8(
                          [
                              [
                                  this.lastElementChild,
                                  { transform: 'rotate(0deg)' },
                              ],
                              [
                                  this.lastElementChild?.previousElementSibling,
                                  { transform: 'rotate(0deg)' },
                              ],
                              [
                                  this.lastElementChild?.previousElementSibling
                                      ?.previousElementSibling,
                                  { transform: 'rotate(0deg)' },
                              ],
                          ],
                          {
                              defaultOptions: {
                                  duration: 0.15,
                                  easing: [0.26, 0.02, 0.27, 0.97],
                              },
                          }
                      )
                    : this.getAttribute('layout') === 'collage'
                    ? timeline8([
                          [
                              this.children,
                              {
                                  opacity: 1,
                                  transform: [
                                      'translateY(15px)',
                                      'translateY(0)',
                                  ],
                              },
                              { duration: 0.3, delay: stagger2(0.1) },
                          ],
                      ])
                    : timeline8([
                          [
                              this.children,
                              {
                                  opacity: 1,
                                  transform:
                                      'rotate(var(--image-rotation, 0deg))',
                              },
                              { duration: 0.3, delay: stagger2(0.1) },
                          ],
                      ]);
        }
        _transitionTo(fromSlide, toSlide, { direction, animate: animate9 }) {
            if (this.getAttribute('layout') !== 'stacked') return;
            const transitionSpeed = 0.2;
            if (direction === 'next') {
                const fromSlideTransform =
                    getComputedStyle(fromSlide).getPropertyValue('transform');
                return timeline8(
                    [
                        [
                            fromSlide,
                            {
                                opacity: 0,
                                transform: 'rotate(5deg) translate(40px, 10px)',
                            },
                            { duration: transitionSpeed },
                        ],
                        [
                            toSlide,
                            { zIndex: 1 },
                            {
                                duration: transitionSpeed,
                                zIndex: { easing: 'step-start' },
                            },
                        ],
                        [
                            fromSlide,
                            {
                                opacity: 1,
                                transform: fromSlideTransform,
                                zIndex: -1,
                            },
                            {
                                duration: transitionSpeed,
                                at: '<',
                                zIndex: { easing: 'step-start' },
                            },
                        ],
                        [
                            toSlide.previousElementSibling,
                            { zIndex: 0 },
                            { at: '<', easing: 'step-start' },
                        ],
                    ],
                    { defaultOptions: { easing: [0.26, 0.02, 0.27, 0.97] } }
                ).finished;
            } else {
                const toSlideTransform =
                    getComputedStyle(toSlide).getPropertyValue('transform');
                return timeline8(
                    [
                        [
                            toSlide,
                            {
                                opacity: 0,
                                transform:
                                    'rotate(-5deg) translate(-40px, -10px)',
                            },
                            { duration: transitionSpeed },
                        ],
                        this.items.length >= 3 && [
                            fromSlide.previousElementSibling ||
                                this.lastElementChild,
                            { zIndex: -1 },
                            { easing: 'step-start' },
                        ],
                        [
                            toSlide,
                            {
                                opacity: 1,
                                transform: toSlideTransform,
                                zIndex: 1,
                            },
                            {
                                duration: transitionSpeed,
                                at: this.items.length >= 3 ? '<' : '+0',
                                zIndex: { easing: 'step-start' },
                            },
                        ],
                        [
                            fromSlide,
                            { zIndex: 0 },
                            {
                                duration: transitionSpeed,
                                at: '<',
                                zIndex: { easing: 'step-start' },
                            },
                        ],
                    ].filter(Boolean),
                    { defaultOptions: { easing: [0.26, 0.02, 0.27, 0.97] } }
                ).finished;
            }
        }
    },
    MultipleImagesWithTextContentList = class extends EffectCarousel3 {
        constructor() {
            super(), inView7(this, this._reveal.bind(this));
        }
        _reveal() {
            animate6(
                ...getHeadingKeyframe3(
                    this.querySelector('[reveal-on-scroll="true"]')
                )
            );
        }
        _transitionTo(
            fromSlide,
            toSlide,
            { direction = 'next', animate: animate9 = !0 } = {}
        ) {
            return (
                fromSlide.classList.remove('is-selected'),
                toSlide.classList.add('is-selected'),
                timeline8(
                    [
                        [
                            fromSlide,
                            {
                                opacity: [1, 0],
                                visibility: ['visible', 'hidden'],
                            },
                        ],
                        [
                            toSlide,
                            {
                                opacity: [0, 1],
                                visibility: ['hidden', 'visible'],
                            },
                        ],
                        [
                            ...getHeadingKeyframe3(
                                toSlide.querySelector(
                                    '[reveal-on-scroll="true"]'
                                ),
                                { at: '<' }
                            ),
                        ],
                    ],
                    {
                        duration: animate9
                            ? parseFloat(this.getAttribute('fade-speed') || 0.5)
                            : 0,
                    }
                ).finished
            );
        }
    };
window.customElements.get('multiple-images-with-text') ||
    window.customElements.define(
        'multiple-images-with-text',
        MultipleImagesWithText
    ),
    window.customElements.get('multiple-images-with-text-image-list') ||
        window.customElements.define(
            'multiple-images-with-text-image-list',
            MultipleImagesWithTextImageList
        ),
    window.customElements.get('multiple-images-with-text-content-list') ||
        window.customElements.define(
            'multiple-images-with-text-content-list',
            MultipleImagesWithTextContentList
        );
import { Drawer as Drawer2 } from './theme.js';
var NewsletterPopup = class extends Drawer2 {
    connectedCallback() {
        super.connectedCallback(),
            this.shouldAppearAutomatically &&
                setTimeout(() => this.show(), this.apparitionDelay);
    }
    get initialFocus() {
        return !1;
    }
    get shouldAppendToBody() {
        return !1;
    }
    get apparitionDelay() {
        return parseInt(this.getAttribute('apparition-delay') || 0) * 1e3;
    }
    get shouldAppearAutomatically() {
        return !(
            localStorage.getItem('theme:popup-filled') === 'true' ||
            (this.hasAttribute('only-once') &&
                localStorage.getItem('theme:popup-appeared') === 'true')
        );
    }
    _setInitialPosition() {
        (this.style.top = null),
            (this.style.bottom = '0px'),
            (this.style.left = document.dir === 'ltr' ? null : '0px'),
            (this.style.right = document.dir === 'rtl' ? 'auto' : '0px');
    }
    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue),
            name === 'open' &&
                this.open &&
                localStorage.setItem('theme:popup-appeared', 'true');
    }
};
window.customElements.get('newsletter-popup') ||
    window.customElements.define('newsletter-popup', NewsletterPopup);
import {
    timeline as timeline9,
    animate as animate7,
    inView as inView8,
} from './vendor.min.js';
import { EffectCarousel as EffectCarousel4 } from './theme.js';
var reduceMotion2 = window.matchMedia(
        '(prefers-reduced-motion: no-preference)'
    ).matches,
    PressCarousel = class extends EffectCarousel4 {
        constructor() {
            super(), reduceMotion2 && inView8(this, this._reveal.bind(this));
        }
        _reveal() {
            animate7(
                this.selectedSlide.querySelector('.blockquote'),
                {
                    opacity: 1,
                    transform: ['translateY(15px)', 'translateY(0)'],
                },
                { duration: 0.2 }
            );
        }
        async _transitionTo(fromSlide, toSlide, options = {}) {
            await timeline9([
                [
                    fromSlide.querySelectorAll('.press__logo, .press__author'),
                    { opacity: [null, 0] },
                    { duration: 0.2 },
                ],
                [
                    fromSlide.querySelector('.blockquote'),
                    {
                        opacity: [null, 0],
                        ...(reduceMotion2 && {
                            transform: [null, 'translateY(-10px)'],
                        }),
                    },
                    { duration: 0.2, at: '<' },
                ],
            ]).finished,
                fromSlide.classList.remove('is-selected'),
                toSlide.classList.add('is-selected'),
                await timeline9([
                    [
                        toSlide.querySelectorAll(
                            '.press__logo, .press__author'
                        ),
                        { opacity: [0, 1] },
                        { duration: 0.2 },
                    ],
                    [
                        toSlide.querySelector('.blockquote'),
                        {
                            opacity: [0, 1],
                            ...(reduceMotion2 && {
                                transform: [
                                    'translateY(10px)',
                                    'translateY(0px)',
                                ],
                            }),
                        },
                        { duration: 0.2, at: '<' },
                    ],
                ]).finished;
        }
    };
window.customElements.get('press-carousel') ||
    window.customElements.define('press-carousel', PressCarousel);
var ProductRecommendations = class extends HTMLElement {
    constructor() {
        super(), (this._isLoaded = !1);
    }
    connectedCallback() {
        this._loadRecommendations();
    }
    async _loadRecommendations() {
        if (this._isLoaded) return;
        this._isLoaded = !0;
        const section = this.closest('.shopify-section'),
            intent = this.getAttribute('intent') || 'related',
            url = `${
                Shopify.routes.root
            }recommendations/products?product_id=${this.getAttribute(
                'product'
            )}&limit=${
                this.getAttribute('limit') || 4
            }&section_id=${section.id.replace(
                'shopify-section-',
                ''
            )}&intent=${intent}`,
            response = await fetch(url, { priority: 'low' }),
            tempDiv = new DOMParser().parseFromString(
                await response.text(),
                'text/html'
            ),
            productRecommendationsElement = tempDiv.querySelector(
                'product-recommendations'
            );
        productRecommendationsElement.childElementCount > 0
            ? this.replaceChildren(
                  ...document.importNode(productRecommendationsElement, !0)
                      .childNodes
              )
            : intent === 'related'
            ? section.remove()
            : this.remove();
    }
};
window.customElements.get('product-recommendations') ||
    window.customElements.define(
        'product-recommendations',
        ProductRecommendations
    );
import { extractSectionId } from './theme.js';
var _isLoaded,
    _searchQueryString,
    searchQueryString_get,
    _loadProducts,
    loadProducts_fn,
    RecentlyViewedProducts = class extends HTMLElement {
        constructor() {
            super(...arguments),
                __privateAdd(this, _searchQueryString),
                __privateAdd(this, _loadProducts),
                __privateAdd(this, _isLoaded, !1);
        }
        connectedCallback() {
            'requestIdleCallback' in window
                ? requestIdleCallback(
                      __privateMethod(
                          this,
                          _loadProducts,
                          loadProducts_fn
                      ).bind(this),
                      { timeout: 1500 }
                  )
                : __privateMethod(this, _loadProducts, loadProducts_fn).call(
                      this
                  );
        }
    };
(_isLoaded = new WeakMap()),
    (_searchQueryString = new WeakSet()),
    (searchQueryString_get = function () {
        const items = new Set(
            JSON.parse(
                localStorage.getItem('theme:recently-viewed-products') || '[]'
            )
        );
        return (
            this.hasAttribute('exclude-id') &&
                items.delete(parseInt(this.getAttribute('exclude-id'))),
            Array.from(items.values(), item => `id:${item}`)
                .slice(0, parseInt(this.getAttribute('products-count')))
                .join(' OR ')
        );
    }),
    (_loadProducts = new WeakSet()),
    (loadProducts_fn = async function () {
        if (__privateGet(this, _isLoaded)) return;
        __privateSet(this, _isLoaded, !0);
        const section = this.closest('.shopify-section'),
            url = `${Shopify.routes.root}search?type=product&q=${__privateGet(
                this,
                _searchQueryString,
                searchQueryString_get
            )}&section_id=${extractSectionId(section)}`,
            response = await fetch(url, { priority: 'low' }),
            tempDiv = new DOMParser().parseFromString(
                await response.text(),
                'text/html'
            ),
            recentlyViewedProductsElement = tempDiv.querySelector(
                'recently-viewed-products'
            );
        recentlyViewedProductsElement.childElementCount > 0
            ? this.replaceChildren(
                  ...document.importNode(recentlyViewedProductsElement, !0)
                      .childNodes
              )
            : section.remove();
    }),
    window.customElements.get('recently-viewed-products') ||
        window.customElements.define(
            'recently-viewed-products',
            RecentlyViewedProducts
        );
import {
    scroll as scroll3,
    timeline as timeline10,
    ScrollOffset,
    inView as inView9,
} from './vendor.min.js';
var RevealedImage = class extends HTMLElement {
    connectedCallback() {
        const scrollTracker = this.querySelector(
                '.revealed-image__scroll-tracker'
            ),
            scroller = this.querySelector('.revealed-image__scroller');
        (scrollTracker.style.height = `${scroller.clientHeight}px`),
            new ResizeObserver(
                entries =>
                    (scrollTracker.style.height = `${entries[0].contentRect.height}px`)
            ).observe(scroller),
            scroll3(
                timeline10([
                    [
                        this.querySelectorAll(
                            '.revealed-image__image-clipper, .revealed-image__content--inside'
                        ),
                        {
                            clipPath: [
                                'inset(37% 37% 41% 37%)',
                                'inset(calc(var(--sticky-area-height) / 2) 0)',
                            ],
                        },
                        { easing: 'ease-in' },
                    ],
                    [
                        this.querySelectorAll('img, svg'),
                        {
                            transform: [
                                'translate(-10%, -1.5%) scale(1.4)',
                                'translate(0, 0) scale(1)',
                            ],
                        },
                        { easing: 'ease-in', at: '<' },
                    ],
                    [
                        this.querySelectorAll('.revealed-image__content'),
                        { opacity: [0, 1, 1] },
                        { offset: [0, 0.25, 1], at: '<' },
                    ],
                ]),
                { target: scrollTracker, offset: ScrollOffset.All }
            ),
            inView9(
                this,
                () => (
                    (this.style.visibility = 'visible'),
                    () => {
                        this.style.visibility = 'hidden';
                    }
                ),
                { margin: '200px' }
            );
    }
};
window.customElements.get('revealed-image') ||
    window.customElements.define('revealed-image', RevealedImage);
import {
    animate as animate8,
    scroll as scroll4,
} from './vendor.min.js';
var ScrollingText = class extends HTMLElement {
    connectedCallback() {
        if (
            window.matchMedia('(prefers-reduced-motion: no-preference)').matches
        )
            if (window.ScrollTimeline) {
                const timeline12 = new ViewTimeline({
                    subject: this,
                    axis: 'block',
                });
                this.animate(
                    {
                        transform: [
                            'translateX(calc(var(--transform-logical-flip) * 50vw))',
                            'translateX(calc(var(--transform-logical-flip) * 50vw - 10%))',
                        ],
                    },
                    {
                        timeline: timeline12,
                        rangeStart: 'cover 0%',
                        rangeEnd: 'cover 100%',
                    }
                );
            } else
                scroll4(
                    animate8(this, {
                        transform: [
                            'translateX(calc(var(--transform-logical-flip) * 50vw))',
                            'translateX(calc(var(--transform-logical-flip) * 50vw - 10%))',
                        ],
                    }),
                    { target: this, offset: ['start end', 'end start'] }
                );
    }
};
window.customElements.get('scrolling-text') ||
    window.customElements.define('scrolling-text', ScrollingText);
var ShopTheLookDots = class extends HTMLElement {
    connectedCallback() {
        (this._abortController = new AbortController()),
            Array.from(this.children).forEach(dots => {
                document
                    .getElementById(dots.getAttribute('aria-controls'))
                    .addEventListener(
                        'carousel:change',
                        event => this._onDotClicked(event),
                        { signal: this._abortController.signal }
                    );
            });
    }
    disconnectedCallback() {
        this._abortController.abort();
    }
    _onDotClicked(event) {
        Array.from(
            this.querySelectorAll(`button:nth-child(${event.detail.index + 1})`)
        ).forEach(button => button.click());
    }
};
window.customElements.get('shop-the-look-dots') ||
    window.customElements.define('shop-the-look-dots', ShopTheLookDots);
import {
    animate as motionAnimate2,
    timeline as timeline11,
    inView as inView10,
} from './vendor.min.js';
import {
    EffectCarousel as EffectCarousel5,
    imageLoaded as imageLoaded4,
    getHeadingKeyframe as getHeadingKeyframe4,
} from './theme.js';
var Slideshow = class extends HTMLElement {
        constructor() {
            super(),
                this.addEventListener('carousel:select', this._onSlideSelected);
        }
        async _onSlideSelected(event) {
            const slideStyles = getComputedStyle(event.detail.slide);
            if (
                (this.style.setProperty(
                    '--slideshow-controls-background',
                    slideStyles.getPropertyValue(
                        '--slideshow-slide-controls-background'
                    )
                ),
                this.style.setProperty(
                    '--slideshow-controls-color',
                    slideStyles.getPropertyValue(
                        '--slideshow-slide-controls-color'
                    )
                ),
                !this.classList.contains('slideshow--boxed'))
            )
                return;
            const backgroundElement = this.querySelector(
                    '.slideshow__slide-background'
                ),
                background = slideStyles.getPropertyValue(
                    '--slideshow-slide-background'
                );
            (backgroundElement.style.background = background),
                await motionAnimate2(
                    backgroundElement,
                    { opacity: [0, 1] },
                    { duration: 0.2 }
                ).finished,
                this.style.setProperty('--slideshow-background', background),
                motionAnimate2(
                    backgroundElement,
                    { opacity: 0 },
                    { duration: 0 }
                );
        }
    },
    SlideshowCarousel = class extends EffectCarousel5 {
        _pendingAnimationControls = [];
        constructor() {
            super(),
                this.addEventListener('carousel:select', this._onSlideSelected),
                this.hasAttribute('reveal-on-scroll') &&
                    inView10(this, this._reveal.bind(this)),
                this.querySelector('.slideshow__cursor') &&
                    this.addEventListener('tap', this._onSlideshowTap);
        }
        connectedCallback() {
            super.connectedCallback(),
                this._player &&
                    this.hasAttribute('autoplay') &&
                    (this._player.addEventListener('player:start', event => {
                        const cursorRing = this.querySelector(
                            '.slideshow__cursor-ring circle'
                        );
                        if (cursorRing) {
                            const cursorRingAnimationControl = motionAnimate2(
                                cursorRing,
                                {
                                    strokeDasharray: [
                                        `0px, ${cursorRing.getTotalLength()}px`,
                                        `${cursorRing.getTotalLength()}px, ${cursorRing.getTotalLength()}px`,
                                    ],
                                },
                                {
                                    duration: event.detail.duration,
                                    easing: 'linear',
                                }
                            );
                            this._pendingAnimationControls.push(
                                cursorRingAnimationControl
                            );
                        }
                        Array.from(
                            this.querySelectorAll('.numbered-dots__item')
                        ).forEach(item => {
                            const circle =
                                item.querySelector('circle:last-child');
                            let circleAnimationControl = null;
                            item.getAttribute('aria-current') === 'true'
                                ? (circleAnimationControl = motionAnimate2(
                                      circle,
                                      {
                                          strokeDasharray: [
                                              `0px, ${circle.getTotalLength()}px`,
                                              `${circle.getTotalLength()}px, ${circle.getTotalLength()}px`,
                                          ],
                                      },
                                      {
                                          duration: event.detail.duration,
                                          easing: 'linear',
                                      }
                                  ))
                                : (circleAnimationControl = motionAnimate2(
                                      circle,
                                      {
                                          strokeDasharray: `${circle.getTotalLength()}px, ${circle.getTotalLength()}px`,
                                      },
                                      { duration: 0, easing: 'linear' }
                                  )),
                                this._pendingAnimationControls.push(
                                    circleAnimationControl
                                );
                        });
                    }),
                    this._player.addEventListener('player:pause', () => {
                        this._pendingAnimationControls.forEach(control =>
                            control.pause()
                        );
                    }),
                    this._player.addEventListener('player:resume', () => {
                        this._pendingAnimationControls.forEach(control =>
                            control.play()
                        );
                    }));
        }
        get transitionType() {
            return window.matchMedia('(prefers-reduced-motion: reduce)').matches
                ? 'fade'
                : this.getAttribute('transition');
        }
        async _reveal() {
            const selectedSlide = this.selectedSlide;
            await imageLoaded4(selectedSlide.querySelectorAll('img')),
                (this.style.opacity = '1'),
                !window.matchMedia('(prefers-reduced-motion: reduce)')
                    .matches &&
                    (this._reloaded ||
                        timeline11([
                            [selectedSlide, { zIndex: 1 }, { duration: 0 }],
                            [
                                selectedSlide.querySelectorAll(
                                    'img, video-media'
                                ),
                                {
                                    opacity: [0, 1],
                                    transform: ['scale(1.05)', 'scale(1)'],
                                },
                                { duration: 0.3 },
                            ],
                            'content',
                            [
                                selectedSlide.querySelectorAll(
                                    '[data-sequence="subheading"], .button'
                                ),
                                { opacity: [0, 1] },
                                { duration: 0.3, at: 'content' },
                            ],
                            [
                                ...getHeadingKeyframe4(
                                    selectedSlide.querySelector(
                                        '[data-sequence="heading"]'
                                    ),
                                    { duration: 0.3, at: 'content' }
                                ),
                            ],
                            [
                                selectedSlide.querySelector('.button'),
                                { opacity: [0, 1] },
                                { duration: 0.3, at: 'content' },
                            ],
                            [
                                this.querySelector('.slideshow__controls'),
                                {
                                    opacity: [0, 1],
                                    transform: [
                                        'translateY(10px)',
                                        'translateY(0)',
                                    ],
                                },
                                { duration: 0.3 },
                            ],
                        ]));
        }
        _onSlideshowTap(event) {
            event.target.matches(
                'button, a[href], button :scope, a[href] :scope'
            ) ||
                !window.matchMedia('screen and (pointer: fine)').matches ||
                (event.detail.originalEvent.clientX > window.innerWidth / 2
                    ? this.next()
                    : this.previous());
        }
        async _transitionTo(
            fromSlide,
            toSlide,
            { direction, animate: animate9 = !0 } = {}
        ) {
            fromSlide.classList.remove('is-selected'),
                toSlide.classList.add('is-selected');
            let timelineControls = null;
            switch (this.transitionType) {
                case 'fade':
                    timelineControls = this._fade(fromSlide, toSlide, {
                        animate: animate9,
                    });
                    break;
                case 'fade_with_text':
                    timelineControls = this._fadeWithText(fromSlide, toSlide, {
                        animate: animate9,
                    });
                    break;
            }
            return (
                animate9 || timelineControls.finish(), timelineControls.finished
            );
        }
        _fade(fromSlide, toSlide) {
            return timeline11([
                [
                    fromSlide,
                    {
                        opacity: [1, 0],
                        visibility: ['visible', 'hidden'],
                        zIndex: 0,
                    },
                    {
                        duration: 0.3,
                        easing: 'ease-in',
                        zIndex: { easing: 'step-end' },
                    },
                ],
                [
                    toSlide,
                    {
                        opacity: [0, 1],
                        visibility: ['hidden', 'visible'],
                        zIndex: 1,
                    },
                    {
                        duration: 0.3,
                        at: '<',
                        easing: 'ease-out',
                        zIndex: { easing: 'step-end' },
                    },
                ],
            ]);
        }
        async _fadeWithText(fromSlide, toSlide) {
            return (
                motionAnimate2(
                    fromSlide,
                    {
                        opacity: [1, 0],
                        visibility: ['visible', 'hidden'],
                        zIndex: 0,
                    },
                    {
                        duration: 0.3,
                        easing: 'ease-in',
                        zIndex: { easing: 'step-end' },
                    }
                ),
                await imageLoaded4(toSlide.querySelectorAll('img')),
                motionAnimate2(
                    toSlide,
                    {
                        opacity: [0, 1],
                        visibility: ['hidden', 'visible'],
                        zIndex: 1,
                    },
                    { duration: 0, zIndex: { easing: 'step-end' } }
                ),
                timeline11([
                    [
                        toSlide.querySelectorAll('img, video-media'),
                        {
                            opacity: [0, 1],
                            transform: ['scale(1.05)', 'scale(1)'],
                        },
                        { duration: 0.3, easing: 'ease-out' },
                    ],
                    'content',
                    [
                        toSlide.querySelectorAll(
                            '[data-sequence="subheading"], .button'
                        ),
                        { opacity: [0, 1] },
                        { duration: 0.3, at: 'content' },
                    ],
                    [
                        ...getHeadingKeyframe4(
                            toSlide.querySelector('[data-sequence="heading"]'),
                            { duration: 0.3, at: 'content' }
                        ),
                    ],
                ])
            );
        }
        async _onSlideSelected(event) {
            if (
                (Array.from(this.querySelectorAll('video-media')).forEach(
                    video => video.pause()
                ),
                event.detail.slide.getAttribute('data-slide-type') === 'video')
            ) {
                const visibleVideo = Array.from(
                    event.detail.slide.querySelectorAll('video-media')
                )
                    .filter(video => video.offsetParent !== null)
                    .pop();
                if ((visibleVideo.play({ restart: !0 }), this.player)) {
                    const video = visibleVideo.querySelector('video');
                    isNaN(video.duration) &&
                        (await new Promise(resolve => {
                            video.onloadedmetadata = () => resolve();
                        })),
                        this._player.setDuration(video.duration);
                }
            } else
                this._player?.setDuration(
                    parseInt(this.getAttribute('autoplay'))
                );
        }
    };
window.customElements.get('x-slideshow') ||
    window.customElements.define('x-slideshow', Slideshow),
    window.customElements.get('slideshow-carousel') ||
        window.customElements.define('slideshow-carousel', SlideshowCarousel);
