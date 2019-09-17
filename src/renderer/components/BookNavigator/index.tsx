import * as React from 'react';
import * as Icon from 'react-feather';
import NotebookTreeItem from './NotebookTreeItem';

import './styles.scss';

export default () => (
  <div>
    <NotebookTreeItem name="Java" icon={<Icon.ChevronRight size='16' />} label={<span></span>} />
  </div>
)
