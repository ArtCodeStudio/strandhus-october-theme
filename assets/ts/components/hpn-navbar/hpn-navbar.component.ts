import { Binder, Utils } from '@ribajs/core';

import { Pjax, Prefetch } from '@ribajs/router';

import { Bs4NavbarComponent } from '@ribajs/bs4/src/components/bs4-navbar/bs4-navbar.component';

export class HpnNavbarComponent extends Bs4NavbarComponent {

  public static tagName: string = 'hpn-navbar';

  protected autobind = true;

  protected pjax?: Pjax;

  static get observedAttributes() {
    return ['collapse-selector'];
  }

  protected scope: any = {
    toggle: this.toggle,
    show: this.show,
    hide: this.hide,
    onItemClick: this.onItemClick,
    isCollapsed: true,
    collapseSelector: '.navbar-collapse',
  };

  constructor(element?: HTMLElement) {
    super(element);
    console.debug('constructor', this);
    this.init(HpnNavbarComponent.observedAttributes);
  }

  public onItemClick(context?: Binder<any>, event?: Event) {
    if (event) {
      const target = event.target as HTMLAnchorElement | null;
      if (target && this.pjax) {
        event.preventDefault();
        let url = target.href;
        if (Utils.isAbsoluteUrl(url) && Utils.isInternalUrl(url)) {
          url = target.pathname + target.search;
        }
        console.debug('go to', url);
        this.pjax.goTo(url);
        // if (!this.scope.isCollapsed) {
        //   this.show();
        //   console.debug('show');
        // }
      }
    }
  }

  // public toggle(context?: Binder<any>, event?: Event) {
  //   super.toggle(context, event);
  // }

  // public show(context?: Binder<any>, event?: Event) {
  //   super.show(context, event);
  // }

  // public hide(context?: Binder<any>, event?: Event) {
  //   super.hide(context, event);
  // }

  protected async init(observedAttributes: string[]) {
    return super.init(observedAttributes)
    .then((view) => {
      return view;
    });
  }

  // protected async beforeBind() {
  //   return super.beforeBind();
  // }

  protected async afterBind() {
    super.afterBind();
    this.pjax = Pjax.getInstance('main');
    return;
  }

  // protected requiredAttributes() {
  //   return [];
  // }

  // protected parsedAttributeChangedCallback(attributeName: string, oldValue: any, newValue: any, namespace: string | null) {
  //   super.parsedAttributeChangedCallback(attributeName, oldValue, newValue, namespace);
  // }

  // deconstructor
  // protected disconnectedCallback() {
  //   super.disconnectedCallback();
  // }

  // protected template() {
  //   return super.template();
  // }

  protected onStateChange() {
    super.onStateChange();
    this.setMenuHeight();
  }

  protected getHighestCollapseElementHeight() {
    let highest = 0;
    if (this.collapse) {
      this.collapse.forEach((collapse) => {
        highest = (collapse as HTMLElement).clientHeight > highest ? (collapse as HTMLElement).clientHeight : highest;
      });
    }
    return highest;
  }

  protected setMenuHeight() {
    const nav = this.el.querySelector('.nav');
    (nav as HTMLElement).style.height = 'auto';
    if (this.scope.isCollapsed) {
      return;
    }
    const addHeight = this.getHighestCollapseElementHeight();
    const height = (nav as HTMLElement).clientHeight + addHeight;
    (nav as HTMLElement).style.height = height + 'px';
  }
}
