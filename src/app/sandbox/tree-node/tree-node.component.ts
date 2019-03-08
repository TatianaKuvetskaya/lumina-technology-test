import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ITreeNode} from '../interfaces';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent {

  @Input() Nodes: Array<ITreeNode>;
  @Input() SelectedNode: ITreeNode;

  @Output() onSelectedChanged: EventEmitter<ITreeNode> = new EventEmitter<ITreeNode>();
  @Output() onRequestNodes: EventEmitter<ITreeNode> = new EventEmitter<ITreeNode>();

  onSelectNode(node: ITreeNode) {
    this.onSelectedChanged.emit(node);
  }

  onExpand(node: ITreeNode) {

    node.isExpanded = !node.isExpanded;

    if (node.isExpanded && (!node.children || node.children.length === 0)) {
      this.onRequestNodes.emit(node);
    }
  }

  onRequestLocal(node: ITreeNode) {
    this.onRequestNodes.emit(node);
  }
}
