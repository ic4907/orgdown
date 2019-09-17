import * as React from 'react';
import * as Icon from 'react-feather';

import './styles.scss'
import BookNavigator from '../../components/BookNavigator';
import NotebookTreeItem from '../../components/BookNavigator/NotebookTreeItem';

export default () => (
  <div className="notebook">
    <div className="sidebar">
      <div className="notes">
        <NotebookTreeItem name="All Notes" icon={<Icon.File size='16' />} label={<span></span>} />
      </div>
      <div className="books">
        <NotebookTreeItem name="Notebooks" icon={<Icon.Folder size='16' />} label={<span>Add</span>} />
      </div>
      <div className="book-navigator">
        <BookNavigator />
      </div>
    </div>
    <div className="documents"></div>
    <div className="editor"></div>
  </div>
)
