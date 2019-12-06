import {
  Riba,
  coreModule,
  Utils,
} from '@ribajs/core';
import routerModule from '@ribajs/router';

import { Bs4IconComponent } from '@ribajs/bs4/src/components/bs4-icon/bs4-icon.component';
import { Bs4ButtonComponent } from '@ribajs/bs4/src/components/bs4-button/bs4-button.component';
import { Bs4ToggleButtonComponent } from '@ribajs/bs4/src/components/bs4-toggle-button/bs4-toggle-button.component';
import { dataScrollPositionYBinder } from '@ribajs/extras/src/binders/data-scroll-position-y.binder';

import { jqueryModule } from '@ribajs/jquery';

// import * as CustomBinders from './binders';
import * as CustomComponents from './components';

export class Main {

  private riba = new Riba();

  constructor() {
    this.riba.module.regist(coreModule);
    this.riba.module.regist(jqueryModule);
    this.riba.module.regist(routerModule);

    // selected elements from modules
    this.riba.module.regist({
      components: { Bs4ButtonComponent, Bs4IconComponent, Bs4ToggleButtonComponent },
      binders: { dataScrollPositionYBinder },
    });

    // Regist custom components
    this.riba.module.regist({
      components: CustomComponents,
      // binders: CustomBinders,
    });

    this.riba.bind(document.body, window.model);
  }
}

Utils.domIsReady(() => {
  const main = new Main();
});
