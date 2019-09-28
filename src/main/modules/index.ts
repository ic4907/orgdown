import OrgdownModule from './module';

import OrgdownUiModule from './ui';
import OrgdownUserModule from "./user";



const modules: Array<OrgdownModule> = [
    new OrgdownUiModule(),
    new OrgdownUserModule(),
]

export default modules;