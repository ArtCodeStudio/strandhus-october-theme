import { Pjax } from '@ribajs/router';
import { isAbsoluteUrl, isInternalUrl } from '@ribajs/utils/src/url';

import { Bs4NavbarComponent } from '@ribajs/bs4/src/components/bs4-navbar/bs4-navbar.component';

export class HshNavbarComponent extends Bs4NavbarComponent {
    public static tagName = 'hsh-navbar';

    protected autobind = true;

    protected pjax?: Pjax;

    static get observedAttributes(): string[] {
        return ['collapse-selector'];
    }

    protected scope = {
        toggle: this.toggle,
        show: this.show,
        hide: this.hide,
        isCollapsed: true,
        collapseSelector: '.navbar-collapse',
        animated: true,
        onItemClick: this.onItemClick,
    };

    constructor(element?: HTMLElement) {
        super(element);
        // console.debug('constructor', this);
    }

    public onItemClick(event?: Event): void {
        if (event) {
            const target = event.target as HTMLAnchorElement | null;
            if (!target) {
                return console.warn('Target not found!');
            }
            if (target && this.pjax) {
                event.preventDefault();
                let url = target.href || '/';
                if (isAbsoluteUrl(url) && isInternalUrl(url)) {
                    url = target.pathname + target.search;
                }
                this.pjax.goTo(url);
            }
        }
    }
}
