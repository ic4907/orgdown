import { EventEmitter } from "events";

interface OrgdownEventTopic {
    name: string,
    event: EventEmitter
}

export default class OrgdownEventBus {

    topics = ['app', 'note', 'user']
    events: Array<OrgdownEventTopic>

    constructor() {
        this.events = this.topics.map((t) => ({
            name: t,
            event: new EventEmitter()
        }))
    }

    private getEvent(topic: string): OrgdownEventTopic | null {
        return this.events.find(it => {
            return topic.startsWith(`orgdown.${it.name}:`)
        })
    }

    on(event: string, listener: (...args: any[]) => void) {
        return this.addListener(event, listener);
    }

    addListener(event: string, listener: (...args: any[]) => void) {
        const targetEvent = this.getEvent(event);

        if (targetEvent) {
            return targetEvent.event.on(event, listener);
        }
    }

    emit(event: string, ...args: any[]): boolean {
        const targetEvent = this.getEvent(event);
        if (targetEvent) {
            return targetEvent.event.emit(event, args);
        }
    }

    removeListener(event: string, listener: (...args: any[]) => void) {
        const targetEvent = this.getEvent(event);

        if (targetEvent) {
            return targetEvent.event.removeListener(event, listener);
        }
    }
}