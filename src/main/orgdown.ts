import modules from './modules';

import OrgdownEventBus from './event-bus';
import * as Store from 'electron-store';

class OrgdownApplication {

    public config: Store;
    public eventBus: OrgdownEventBus;

    private registerModules(config: Store, eventBus: OrgdownEventBus) {
        modules.forEach(module => {
            const moduleConfig = config.get(module.getName(), {});
            module.init(moduleConfig, eventBus);
            module.registe();
        })
    }

    constructor(config: Store) {
        this.config = config;
        this.eventBus = new OrgdownEventBus();

        this.registerModules(this.config, this.eventBus);
    }

}

export default OrgdownApplication;