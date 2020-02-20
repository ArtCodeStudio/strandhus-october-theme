import { Utils } from '@ribajs/core';

import { Pjax, Prefetch } from '@ribajs/router';

import { Bs4SidebarComponent } from '@ribajs/bs4/src/components/bs4-sidebar/bs4-sidebar.component';

import { CollapseService } from '@ribajs/bs4/src/services/collapse.service';

type State = 'overlay-left' | 'overlay-right' | 'side-left' | 'side-right' | 'hidden';

interface ToggleItem {
    collapseService: CollapseService;
    handle: string;
}

const ANIMATED_COLLAPSE = false;

interface Scope {
    /**
     * Selector string to get the container element from DOM
     */
    containerSelector?: string;
    /**
     * The current state of the sidebar, can be `'hidden'`, `'side-left'`, `'side-right'`, `'overlay-left'` or `'overlay-right'`
     */
    state: State;
    /**
     * The 'id' is required to react to events of the `bs4-toggle-button`, the `target-id` attribute of the `bs4-toggle-button` must be identical to this `id`
     */
    id?: string;
    /**
     * The width of the sidebar
     */
    width: string;

    // Options
    /**
     * The sidebar can be positioned `right` or `left`
     */
    position: 'left' | 'right';
    /**
     * Auto show the sidebar if the viewport width is wider than this value
     */
    autoShowOnWiderThan: number;
    /**
     * Auto hide the sidebar if the viewport width is slimmer than this value
     */
    autoHideOnSlimmerThan: number;
    /**
     * Auto hide the sidebar if the route changes
     */
    watchNewPageReadyEvent: boolean;
    /**
     * You can force to hide the sidebar on corresponding URL pathames e.g. you can hide the sidebar on home with `['/']`.
     */
    forceHideOnLocationPathnames: Array<string>;
    /**
     * Like `force-hide-on-location-pathnames`, but to force to open the sidebar
     */
    forceShowOnLocationPathnames: Array<string>;
    /**
     * If the viewport width is wider than this value the sidebar adds a margin to the container (detected with the `container-selector`) to reduce its content, if the viewport width is slimmer than this value the sidebar opens over the content
     */
    overlayOnSlimmerThan: number;

    // Template methods
    /**
     * Hides / closes the sidebar
     */
    hide: HshSidebarComponent['hide'];
    /**
     * Shows / opens the sidebar
     */
    show: HshSidebarComponent['show'];
    /**
     * Toggles (closes or opens) the sidebar
     */
    toggle: HshSidebarComponent['toggle'];

    // Custom
    toggleItem: HshSidebarComponent['toggleItem'];

    onItemClick: HshSidebarComponent['onItemClick'];
}

export class HshSidebarComponent extends Bs4SidebarComponent {
    public static tagName = 'hsh-sidebar';

    protected autobind = true;

    protected toggleItems: Array<ToggleItem> = [];

    protected pjax?: Pjax;

    static get observedAttributes() {
        return [
            'id',
            'container-selector',
            'position',
            'width',
            'auto-show-on-wider-than',
            'auto-hide-on-slimmer-than',
            'force-hide-on-location-pathnames',
            'force-show-on-location-pathnames',
            'overlay-on-slimmer-than',
        ];
    }

    protected scope: Scope = {
        // template properties
        containerSelector: undefined,
        state: 'hidden',
        id: undefined,
        width: '100vw',

        // Options
        position: 'left',
        autoShowOnWiderThan: -1,
        autoHideOnSlimmerThan: -1,
        watchNewPageReadyEvent: false,
        forceHideOnLocationPathnames: [],
        forceShowOnLocationPathnames: [],
        overlayOnSlimmerThan: 1200,

        // template methods
        hide: this.hide,
        show: this.show,
        toggle: this.toggle,

        // custom
        toggleItem: this.toggleItem,
        onItemClick: this.onItemClick,
    };

    constructor(element?: HTMLElement) {
        super(element);
    }

    public toggleItem(handle: string, context: any, event: Event) {
        event.preventDefault();
        event.stopPropagation();
        const toggleItem = this.getToggleItem(handle);
        if (toggleItem) {
            this.closeAllToggleItems(toggleItem);
            toggleItem.collapseService.toggle(ANIMATED_COLLAPSE);
        }

        if (event) {
            const target = event.target as HTMLAnchorElement | null;
            if (!target) {
                return console.warn('Target not found!');
            }
            if (target && this.pjax) {
                let url = target.href || '/';
                if (Utils.isAbsoluteUrl(url) && Utils.isInternalUrl(url)) {
                    url = target.pathname + target.search;
                }
                this.pjax.goTo(url);
            }
        }
    }

    public onItemClick(context?: any, event?: Event) {
        if (event) {
            const target = event.target as HTMLAnchorElement | null;
            if (!target) {
                return console.warn('Target not found!');
            }

            if (target && this.pjax) {
                event.preventDefault();
                let url = target.href || '/';
                if (Utils.isAbsoluteUrl(url) && Utils.isInternalUrl(url)) {
                    url = target.pathname + target.search;
                }

                this.hide();
                this.pjax.goTo(url);
            }
        }
    }

    protected closeAllToggleItems(except?: ToggleItem) {
        for (const toggleItem of this.toggleItems) {
            if (!except || toggleItem.handle !== except.handle) {
                toggleItem.collapseService.hide(ANIMATED_COLLAPSE);
            }
        }
    }

    protected getToggleItem(handle: string) {
        for (const toggleItem of this.toggleItems) {
            if (toggleItem.handle === handle) {
                return toggleItem;
            }
        }
        return null;
    }

    protected connectedCallback() {
        super.connectedCallback();
        const dropdownToggleElements = this.el.querySelectorAll('.collapse') as NodeListOf<
            HTMLButtonElement | HTMLAnchorElement
        >;
        dropdownToggleElements.forEach(toggleElement => {
            if (toggleElement.dataset.handle) {
                this.toggleItems.push({
                    collapseService: new CollapseService([toggleElement]),
                    handle: toggleElement.dataset.handle,
                });
            }
        });
    }

    protected async beforeBind() {
        return super.beforeBind();
    }

    protected async afterBind() {
        super.afterBind();
        this.pjax = Pjax.getInstance('main');
    }

    protected requiredAttributes() {
        return ['id'];
    }

    protected parsedAttributeChangedCallback(
        attributeName: string,
        oldValue: any,
        newValue: any,
        namespace: string | null,
    ) {
        super.parsedAttributeChangedCallback(attributeName, oldValue, newValue, namespace);
    }

    // deconstructor
    protected disconnectedCallback() {
        super.disconnectedCallback();
    }
}
