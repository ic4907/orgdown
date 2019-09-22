import * as React from 'react';
import * as Icon from 'react-feather';
import { remote } from 'electron';

import './styles.scss';

const { Menu, MenuItem } = remote;

const userMenu = new Menu()
userMenu.append(new MenuItem({
  label: 'user',
  click: () => {
    console.log('hello user');
  }
}))

export default () => (
  <div className="user-info" onClick={() => {
    userMenu.popup();
  }}>
    <Icon.User />
    <span className="username">ygwang</span>
  </div>
)
