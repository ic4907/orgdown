import * as React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';

import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';


import './styles.scss';


class DocumentEditor extends React.Component {

  state = { value: "hello" }

  render() {
    return (
      <div className="document-editor">
        <CodeMirror
          className="codemirror-markdown-editor"
          autoCursor={true}
          options={{
            mode: 'markdown',
            theme: 'orgdown-light',
            lineWrapping: true
          }}
          value={this.state.value}
          onBeforeChange={(editor, data) => {
            this.setState({ value: data })
          }}
        />
      </div>
    )
  }
}

export default DocumentEditor;
