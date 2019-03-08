export interface ITreeNode {
  _id: number;
  name: string;
  children: Array<ITreeNode>;
  isExpanded?: boolean;
  parent: ITreeNode;
  isLeaf?: boolean;
  info: string;
}

export interface INode {
  _id: number;
  name: string;
  parentNode: string;
}
