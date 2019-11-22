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
    onItemHover: this.onItemHover,
    isCollapsed: true,
    collapseSelector: '.nav-item-level-2-wrapper',
  };

  constructor(element?: HTMLElement) {
    super(element);
    console.debug('constructor', this);
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
        let url = target.href;
        if (Utils.isAbsoluteUrl(url) && Utils.isInternalUrl(url)) {
          url = target.pathname + target.search;
        }
        // And go to page
        if (parent.classList.contains('active')) {
          this.toggle();
          return;
        }

        // If this element has childs toggle the menu
        if (parent.classList.contains('nav-item-level-1-with-childs')) {
          this.show();
        } else {
          this.hide();
        }

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
      if (target && this.pjax) {
        // If this element has childs toggle the menu
        if (parent.classList.contains('nav-item-level-1-with-childs')) {
          console.debug('hover');
        }
      }
    }
  }

  public toggle(context?: Binder<any>, event?: Event) {
    super.toggle(context, event);
    console.debug('toggle');
  }

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

  protected onNewPageReady() {
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
    // this.init(HpnNavbarComponent.observedAttributes);
    console.debug('connectedCallback', this);
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
        console.debug('(collapse as HTMLElement).clientHeight', (collapse as HTMLElement).clientHeight);
        highest = (collapse as HTMLElement).clientHeight > highest ? (collapse as HTMLElement).clientHeight : highest;
      });
    }
    console.debug('highest', highest);
    return highest;
  }

  protected setMenuHeight() {
    const nav = this.el.querySelector('.nav');
    if (this.scope.isCollapsed) {
      (nav as HTMLElement).style.height = 'auto';
      return;
    }
    setTimeout(() => {
      const addHeight = this.getHighestCollapseElementHeight();
      // const height = (nav as HTMLElement).clientHeight + addHeight;
      const height = 72 + addHeight;
      (nav as HTMLElement).style.height = height + 'px';
    }, 0);

  }
}
