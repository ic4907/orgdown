import { OrgdownModule } from ".";

class AuthModules implements OrgdownModule {
    registerEvent(): void {
        throw new Error("Method not implemented.");
    }
    init(): void {
        console.log('auth modules init');
    }

}

export default AuthModules;