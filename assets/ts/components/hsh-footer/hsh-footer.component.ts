import { Component } from '@ribajs/core';

export class HshFooterComponent extends Component {
    public static tagName = 'hsh-footer';

    protected autobind = true;

    static get observedAttributes(): string[] {
        return [];
    }

    protected scope: any = {};

    constructor(element?: HTMLElement) {
        super(element);
        this.init(HshFooterComponent.observedAttributes);
    }

    protected async init(observedAttributes: string[]) {
        return super.init(observedAttributes).then(view => {
            return view;
        });
    }

    protected requiredAttributes(): string[] {
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
        return null;
    }
}
