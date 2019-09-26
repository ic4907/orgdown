import { EventEmitter } from "events";
import { fromEvent } from "rxjs";

import { initModules } from './modules';
import { startup } from "./gui";
import { OrgdownConfig } from "@orgdown/config";


class OrgdownApplication extends EventEmitter {

    config: OrgdownConfig;

    initGui() {
        startup();
    }

    loadPlugins() {
        console.log(this.config);
    }

    loadModules() {
        initModules()
    }

    initEventBus() {
        fromEvent(this, 'orgdown.app:start')
            .subscribe(() => {
                this.initGui();
            })
    }

    constructor(config: any) {
        super();
        this.config = config;

        this.loadModules();
        this.loadPlugins();
        this.initEventBus();


    }

}

export default OrgdownApplication;