import { Riba, coreModule } from '@ribajs/core';
import { ready } from '@ribajs/utils/src/dom';
import { routerModule } from '@ribajs/router';
import { bs4Module } from '@ribajs/bs4';

// BS4 Components
import { OcFormComponent } from '@ribajs/octobercms/src/components/oc-form/oc-form.component';

// import { dataScrollPositionYBinder } from '@ribajs/extras/src/binders/data-scroll-position-y.binder';

import { jqueryModule } from '@ribajs/jquery';
import { photoswipeModule } from '@ribajs/photoswipe';
import { leafletModule } from '@ribajs/leaflet-map';

// import * as CustomBinders from './binders';
import * as CustomComponents from './components';

export class Main {
    private riba = new Riba();

    constructor() {
        this.riba.module.regist(coreModule);
        this.riba.module.regist(jqueryModule);
        this.riba.module.regist(routerModule);
        this.riba.module.regist(photoswipeModule);
        this.riba.module.regist(leafletModule);
        this.riba.module.regist(bs4Module);

        // selected elements from modules
        this.riba.module.regist({
            components: {
                OcFormComponent,
            },
        });

        // Regist custom components
        this.riba.module.regist({
            components: CustomComponents,
            // binders: CustomBinders,
        });

        this.riba.bind(document.body, window.model);
    }
}

ready(() => {
    new Main();
});
