import * as React from 'react';
import * as Icon from 'react-feather';

import './styles.scss';

export default () => (
  <div className="tool-box">
    <div className="sort-button">
      <Icon.Menu size="16" />
    </div>
    <div className="book-name">
      All Notes
    </div>
    <div className="add-note-button">
      <Icon.Plus size="16" />
    </div>
  </div>
)
