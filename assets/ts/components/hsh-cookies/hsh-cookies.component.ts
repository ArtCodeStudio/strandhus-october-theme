import { Component, View } from '@ribajs/core';

interface Scope {
    denyCookies: HshCookiesComponent['denyCookies'],
    acceptCookies: HshCookiesComponent['acceptCookies'],
}
export class HshCookiesComponent extends Component {
    public static tagName = 'hsh-cookies';

    protected autobind = true;

    static get observedAttributes(): string[] {
        return [];
    }

    protected scope = {
        denyCookies: this.denyCookies,
        acceptCookies: this.acceptCookies
    };

    constructor(element?: HTMLElement) {
        super(element);
        this.init(HshCookiesComponent.observedAttributes);
    }

    protected async init(observedAttributes: string[]): Promise<View | null | undefined> {
        return super.init(observedAttributes).then((view) => {
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
        if (this.getCookie('hsh-cookies') == null) {
            return null;
        } else {
            return '';
        }

    }

    protected denyCookies() {
        console.log("denied cookies");
        this.el.parentNode.removeChild(this.el);
        document.__defineGetter__("cookie", function() { return '';} );
        document.__defineSetter__("cookie", function() {} );
        this.deleteCookies();
    }

    protected acceptCookies() {
        document.cookie = 'hsh-cookies=accept; expires=Thu, 13 Jul 2022 12:00:00 UTC';
        this.el.parentNode.removeChild(this.el);
    }

//stackoverflow
    protected getCookie(name): string {
        var dc = document.cookie;
        var prefix = name + "=";
        var begin = dc.indexOf("; " + prefix);
        if (begin == -1) {
            begin = dc.indexOf(prefix);
            if (begin != 0) return null;
        }
        else
        {
            begin += 2;
            var end = document.cookie.indexOf(";", begin);
            if (end == -1) {
            end = dc.length;
            }
        }
        // because unescape has been deprecated, replaced with decodeURI
        //return unescape(dc.substring(begin + prefix.length, end));
        return decodeURI(dc.substring(begin + prefix.length, end));
    } 

    protected deleteCookies() {
        var cookies = document.cookie.split(";");

        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    
    }
}
