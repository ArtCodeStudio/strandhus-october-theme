import { Component, View } from '@ribajs/core';

export class HshFooterComponent extends Component {
    public static tagName = 'hsh-footer';

    protected autobind = true;

    static get observedAttributes(): string[] {
        return [];
    }

    protected scope = {};

    constructor(element?: HTMLElement) {
        super(element);
        this.init(HshFooterComponent.observedAttributes);
    }

    protected async init(observedAttributes: string[]): Promise<View | null | undefined> {
        return super.init(observedAttributes).then(view => {
            return view;
        });
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
