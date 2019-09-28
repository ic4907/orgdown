import { app } from 'electron';
import { fromEvent } from 'rxjs';

import * as Store from 'electron-store';
import OrgdownApplication from './orgdown';
import defaultConfig from '@orgdown/config';

const config = new Store({
  defaults: defaultConfig
})

const orgdown = new OrgdownApplication(config);

fromEvent(app, 'ready').subscribe(() => {
  orgdown.eventBus.emit('orgdown.app:startup');
})

fromEvent(app, 'window-all-closed').subscribe(() => {
  if (process.platform !== 'darwin') {
    orgdown.eventBus.emit('orgdown.app:quit');
  }
})

fromEvent(app, 'activate').subscribe(() => {
  orgdown.eventBus.emit('orgdown.app:activate');
})

export default orgdown;
