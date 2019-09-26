import * as React from 'react';
import * as Icon from 'react-feather';

import BookNavigator from '@orgdown/components/BookNavigator';
import DocumentList from '@orgdown/components/DocumentList';
import DocumentSearchBox from '@orgdown/components/DocumentSearchBox';
import NotebookToolbox from '@orgdown/components/NotebookToolbox';
import NotebookTreeItem from '@orgdown/components/BookNavigator/NotebookTreeItem';

import './styles.scss';
import DocumentTitleEditor from '@orgdown/components/DocumentTitleEditor';
import DocumentToolbar from '@orgdown/components/DocumentToolbar';
import DocumentEditor from '@orgdown/components/DocumentEditor';
import DocumentSidebar from '@orgdown/components/DocumentSidebar';
import UserInfo from '@orgdown/components/UserInfo';

class Notebook extends React.Component {

  render() {
    return (
      <div className="notebook">
        <div className="sidebar">
          <div className="notes">
            <NotebookTreeItem
              name="All Notes"
              icon={<Icon.File size='16' />}
              label={<span></span>}
            />
          </div>
          <div className="books">
            <NotebookTreeItem
              name="Notebooks"
              icon={<Icon.Folder size='16' />}
              label={<span>Add</span>}
            />
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
  }
}

export default Notebook;
