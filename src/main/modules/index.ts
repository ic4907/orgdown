import AuthModules from './auth';

export interface OrgdownModule {
    init(): void;

    registerEvent(): void;
}

const auth = new AuthModules();

export function initModules() {
    auth.init();
}