import { Binder, Utils } from '@ribajs/core';

import { Pjax } from '@ribajs/router';

import { Bs4NavbarComponent } from '@ribajs/bs4/src/components/bs4-navbar/bs4-navbar.component';

export class HpnNavbarComponent extends Bs4NavbarComponent {
    public static tagName = 'hpn-navbar';

    protected autobind = true;

    protected pjax?: Pjax;

    static get observedAttributes() {
        return ['collapse-selector'];
    }

    protected scope: any = {
        toggle: this.toggle,
        show: this.show,
        hide: this.hide,
        navbarCollapsedHeight: 72,
        onItemClick: this.onItemClick,
        onItemHover: this.onItemHover,
        onNavbarHover: this.onNavbarHover,
        onNavbarLeave: this.onNavbarLeave,
        isCollapsed: true,
        collapseSelector: '.nav-item-level-2-wrapper',
        collapseHoverSelector: '.nav-item-level-2-wrapper',
        showOnHoverClass: 'show-on-hover',
        hideOnHoverClass: 'hide-on-hover',
        animated: false,
    };

    constructor(element?: HTMLElement) {
        super(element);
        // console.debug('constructor', this);
    }

    public onItemClick(context?: Binder<any>, event?: Event) {
        if (event) {
            const target = event.target as HTMLAnchorElement | null;
            if (!target) {
                return console.warn('Target not found!');
            }
            const parent = target.parentNode as HTMLElement;
            if (target && this.pjax) {
                event.preventDefault();
                let url = target.href || '/';
                if (Utils.isAbsoluteUrl(url) && Utils.isInternalUrl(url)) {
                    url = target.pathname + target.search;
                }
                // And go to page
                if (parent.classList.contains('active')) {
                    this.toggle();
                    return;
                }

                // If this element has childs toggle the menu
                // if (parent.classList.contains('nav-item-level-1-with-childs')) {
                //   this.show();
                // } else {
                //   this.hide();
                // }
                this.hide();

                this.pjax.goTo(url);
            }
        }
    }

    public onItemHover(context?: Binder<any>, event?: Event) {
        if (event) {
            const target = event.target as HTMLAnchorElement | null;
            if (!target) {
                return console.warn('Target not found!');
            }
            const parent = target.parentNode as HTMLElement;
            if (target && this.pjax && !this.scope.isCollapsed) {
                this.hideAllOnHover();
                const collapseHoverElement = parent.querySelector(this.scope.collapseHoverSelector);
                // If this element has childs show the menu
                if (parent.classList.contains('nav-item-level-1-with-childs')) {
                    if (collapseHoverElement) {
                        this.showElementOnHover(collapseHoverElement);
                    }
                }
                this.setMenuHeight();
            }
        }
    }

    public onNavbarHover(context?: Binder<any>, event?: Event) {
        this.show(context, event);
    }

    public onNavbarLeave(context?: Binder<any>, event?: Event) {
        this.hide(context, event);
    }

    public toggle(context?: Binder<any>, event?: Event) {
        super.toggle(context, event);
    }

    public show(context?: Binder<any>, event?: Event) {
        super.show(context, event);
    }

    public hide(context?: Binder<any>, event?: Event) {
        super.hide(context, event);
    }

    protected hideElementOnHover(element: HTMLElement) {
        element.classList.remove(this.scope.showOnHoverClass);
        element.classList.add(this.scope.hideOnHoverClass);
    }

    protected showElementOnHover(element: HTMLElement) {
        element.classList.add(this.scope.showOnHoverClass);
        element.classList.remove(this.scope.hideOnHoverClass);
    }

    protected removeElementOnHoverClasses(element: HTMLElement) {
        element.classList.remove(this.scope.showOnHoverClass);
        element.classList.remove(this.scope.hideOnHoverClass);
    }

    protected hideAllOnHover() {
        const collapseHoverElements = this.el.querySelectorAll(this.scope.collapseHoverSelector);
        collapseHoverElements.forEach(collapseHoverElement => {
            this.hideElementOnHover(collapseHoverElement);
        });
    }

    protected removeAllOnHoverClasses() {
        const collapseHoverElements = this.el.querySelectorAll(this.scope.collapseHoverSelector);
        collapseHoverElements.forEach(collapseHoverElement => {
            this.removeElementOnHoverClasses(collapseHoverElement);
        });
    }

    protected getHighestCollapseElementHeight() {
        let highest = 0;
        if (this.collapse) {
            this.collapse.forEach(collapse => {
                const clientHeight = (collapse as HTMLElement).clientHeight;
                highest = clientHeight > highest ? clientHeight : highest;
            });
        }
        // Special case for navbar brand
        const navbarBrand = this.el.querySelector('.navbar-brand');
        if (navbarBrand) {
            const clientHeight = (navbarBrand as HTMLElement).clientHeight - this.scope.navbarCollapsedHeight;
            highest = clientHeight > highest ? clientHeight : highest;
        }
        return highest;
    }

    protected setMenuHeight() {
        const nav = this.el.querySelector('.nav');
        if (this.scope.isCollapsed) {
            (nav as HTMLElement).style.height = this.scope.navbarCollapsedHeight + 'px'; // 'auto';
            return;
        }
        setTimeout(() => {
            const addHeight = this.getHighestCollapseElementHeight();
            // const height = (nav as HTMLElement).clientHeight + addHeight;
            const height = this.scope.navbarCollapsedHeight + addHeight;
            (nav as HTMLElement).style.height = height + 'px';
        }, 0);
    }

    protected async init(observedAttributes: string[]) {
        return super.init(observedAttributes).then(view => {
            return view;
        });
    }

    protected async beforeBind() {
        return super.beforeBind();
    }

    protected onNewPageReady() {
        // DO not hide the menu on new page, we do this over `this.onItemClick`
        // if (this.collapseService) {
        //   this.collapseService.hide();
        // }
    }

    protected async afterBind() {
        super.afterBind();
        this.pjax = Pjax.getInstance('main');
        return;
    }

    protected connectedCallback() {
        super.connectedCallback();
        // console.debug('connectedCallback', this);
    }

    protected requiredAttributes() {
        return [];
    }

    protected parsedAttributeChangedCallback(
        attributeName: string,
        oldValue: any,
        newValue: any,
        namespace: string | null,
    ) {
        super.parsedAttributeChangedCallback(attributeName, oldValue, newValue, namespace);
    }

    protected disconnectedCallback() {
        super.disconnectedCallback();
    }

    protected template() {
        return super.template();
    }

    protected onStateChange() {
        super.onStateChange();
        this.removeAllOnHoverClasses();
        this.setMenuHeight();
    }
}
