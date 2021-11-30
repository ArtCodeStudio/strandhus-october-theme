import { Riba, coreModule } from '@ribajs/core';
import { ready } from '@ribajs/utils/src/dom';
import { routerModule } from '@ribajs/router';
import { bs4Module } from '@ribajs/bs4';
import { octobercmsModule } from '@ribajs/octobercms';

import { jqueryModule } from '@ribajs/jquery';
import { photoswipeModule } from '@ribajs/photoswipe';
import { leafletModule } from '@ribajs/leaflet-map';

import * as CustomBinders from './binders';
import * as CustomComponents from './components';

export class Main {
    private riba = new Riba();

    constructor() {
        this.riba.module.regist(coreModule.init());
        this.riba.module.regist(jqueryModule.init());
        this.riba.module.regist(routerModule.init());
        this.riba.module.regist(photoswipeModule.init());
        this.riba.module.regist(leafletModule.init());
        this.riba.module.regist(bs4Module.init());
        this.riba.module.regist(octobercmsModule.init());

        // Regist custom components
        this.riba.module.component.regists(CustomComponents);
        this.riba.module.binder.regists(CustomBinders);

        this.riba.bind(document.body, window.model || {});
    }
}

ready(() => {
    new Main();
});
