import { Component } from '@ribajs/core';

export class HshFooterComponent extends Component {
    public static tagName = 'hsh-footer';

    protected autobind = true;

    static get observedAttributes(): string[] {
        return [];
    }

    public scope = {};

    constructor() {
        super();
    }

    protected connectedCallback() {
        super.connectedCallback();
        this.init(HshFooterComponent.observedAttributes);
    }

    protected requiredAttributes(): string[] {
        return [];
    }

    protected parsedAttributeChangedCallback(
        attributeName: string,
        oldValue: unknown,
        newValue: unknown,
        namespace: string | null,
    ): void {
        super.parsedAttributeChangedCallback(attributeName, oldValue, newValue, namespace);
    }

    // deconstructor
    protected disconnectedCallback(): void {
        super.disconnectedCallback();
    }

    protected template(): string | null {
        return null;
    }
}
