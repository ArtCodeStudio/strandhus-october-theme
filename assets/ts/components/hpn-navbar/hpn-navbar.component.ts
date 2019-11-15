import {
  Component,
  Binder,
} from '@ribajs/core';

import { Bs4NavbarComponent } from '@ribajs/bs4/src/components/bs4-navbar/bs4-navbar.component';

export class HpnNavbarComponent extends Bs4NavbarComponent {

  public static tagName: string = 'hpn-navbar';

  protected autobind = true;

  static get observedAttributes() {
    return ['collapse-selector'];
  }

  protected scope: any = {
    toggle: this.toggle,
    show: this.show,
    hide: this.hide,
    isCollapsed: true,
    collapseSelector: '.navbar-collapse',
  };

  constructor(element?: HTMLElement) {
    super(element);
    console.debug('constructor', this);
    this.init(HpnNavbarComponent.observedAttributes);
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

  // protected async afterBind() {
  //   return super.afterBind();
  // }

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
}
