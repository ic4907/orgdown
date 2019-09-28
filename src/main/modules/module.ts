import OrgdownEventBus from "../event-bus";

export default abstract class OrgdownModule {
    config: any
    eventBus: OrgdownEventBus

    init(config: any, eventBus: OrgdownEventBus): void {
        this.config = config;
        this.eventBus = eventBus;
    };

    abstract getName(): string;

    abstract registe(): OrgdownModule;

}