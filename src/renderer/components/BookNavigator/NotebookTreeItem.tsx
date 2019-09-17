import * as React from 'react';
import { Icon } from 'react-feather';

interface Props {
  name: string,
  icon: any,
  label: any
}

class NotebookTreeItem extends React.Component<Props> {

  render() {
    const { name, icon, label } = this.props;
    console.log(this.props);

    return (
      <div className="tree-node">
        <div className="tree-node-icon">
          { icon }
        </div>
        <div className="tree-node-name">{name}</div>
        <div className="tree-node-lable">{label}</div>
      </div>
    )
  }
}

export default NotebookTreeItem;
