import OrgdownModule from '../module'
import OrgdownEventBus from "@orgdown/main/event-bus";
import { fromEvent } from "rxjs";

class OrgdownUserModule extends OrgdownModule {

    getName(): string {
        return "user";
    }

    registe(): OrgdownModule {
        fromEvent(this.eventBus, 'orgdown.app:startup').subscribe(() => {
            this.auth();
        });
        return this;
    }

    auth() {
        if (false) {
            this.eventBus.emit('orgdown.user:auth-success', {
                username: 'ygwang'
            }) 
        } else {
            this.eventBus.emit('orgdown.user:auth-required', {
                username: 'ygwang'
            })
        }
    }
}

export default OrgdownUserModule;