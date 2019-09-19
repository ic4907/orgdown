import * as React from 'react';
import * as Icon from 'react-feather';

import BookNavigator from '@components/BookNavigator';
import DocumentList from '@components/DocumentList';
import DocumentSearchBox from '@components/DocumentSearchBox';
import NotebookToolbox from '@components/NotebookToolbox';
import NotebookTreeItem from '@components/BookNavigator/NotebookTreeItem';

import './styles.scss';
import DocumentTitleEditor from '@components/DocumentTitleEditor';
import DocumentToolbar from '@components/DocumentToolbar';
import DocumentEditor from '@components/DocumentEditor';
import DocumentSidebar from '@components/DocumentSidebar';
import UserInfo from '@components/UserInfo';

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
      <div className="user">
        <UserInfo />
      </div>
    </div>
    <div className="documents">
      <NotebookToolbox />
      <DocumentSearchBox />
      <DocumentList />
    </div>
    <div className="workbench">
      <div className="editor">
        <DocumentTitleEditor />
        <DocumentToolbar />
        <DocumentEditor />
      </div>
      <DocumentSidebar />
    </div>
  </div>
)
