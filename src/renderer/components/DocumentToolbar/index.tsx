import * as React from 'react';
import * as Icon from 'react-feather';

import './styles.scss';

export default () => (
  <div className="document-toolbar">
    <div className="first-items toolbar-items">
      <div className="toolbar-item">
        <Icon.Bold size="16" />
      </div>
      <div className="toolbar-item">
        <Icon.Italic size="16" />
      </div>
      <div className="toolbar-item">
        <Icon.Underline size="16" />
      </div>
      <div className="toolbar-item">
        <Icon.List size="16" />
      </div>
      <div className="toolbar-item">
        <Icon.Link size="16" />
      </div>
      <div className="toolbar-item">
        <Icon.Code size="16" />
      </div>
    </div>
    <div className="sencond-items toolbar-items">
      <div className="toolbar-item">
        <Icon.Share2 size="16" />
      </div>
      <div className="toolbar-item">
        <Icon.Trash2 size="16" />
      </div>
    </div>
  </div>
)
