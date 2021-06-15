import { Component } from '@ribajs/core';

import template from './art-code-credits.component.html';

interface Scope {
    popupVisible: boolean;
    toggle: ArtCodeCreditsComponent['toggle'];
    alignBottom: boolean;
    iconSrc: string;
}

export class ArtCodeCreditsComponent extends Component {
    public static tagName = 'art-code-credits';

    autobind = true;

    static get observedAttributes() {
        return ['align-bottom', 'icon-src'];
    }

    public scope: Scope = {
        popupVisible: false,
        toggle: this.toggle,
        alignBottom: false,
        iconSrc: '',
    };

    constructor() {
        super();
        this.debug('constructor', this);
    }

    protected connectedCallback() {
        super.connectedCallback();
        this.init(ArtCodeCreditsComponent.observedAttributes);
    }

    protected async init(observedAttributes: string[]) {
        return super.init(observedAttributes).then((view) => {
            return view;
        });
    }

    protected async beforeBind() {
        await super.beforeBind();
    }

    protected async afterBind() {
        await super.afterBind();
        console.log('Art+Code Credits after bind called');
        document.addEventListener('click', (e: MouseEvent) => {
            if (e.target && !this.contains(e.target as Node)) {
                // console.log(this);
                this.scope.popupVisible = false;
            }
        });
    }

    public toggle() {
        this.scope.popupVisible = !this.scope.popupVisible;
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

    // deconstructor
    protected disconnectedCallback() {
        super.disconnectedCallback();
    }

    protected template() {
        // Only set the component template if there no childs already
        if (this.hasChildNodes()) {
            // this.debug('Do not use template, because element has child nodes');
            return null;
        } else {
            // this.debug('Use template', template);
            return template;
        }
    }
}
