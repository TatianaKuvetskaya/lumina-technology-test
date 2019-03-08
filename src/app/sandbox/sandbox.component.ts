import {Component, OnInit} from '@angular/core';
import {ITreeNode} from './interfaces';
import {TreeService} from './tree.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {

  Nodes: Array<ITreeNode>;
  selectedNode: ITreeNode;

  constructor(private treeService: TreeService,
              public http: HttpClient) {
  }

  ngOnInit() {
    this.treeService.GetStartNods()
      .then((parentNode: ITreeNode) => {
          this.Nodes = [parentNode];
        },
        error => console.log(error));
  }

  onSelectNode(node: ITreeNode) {
    this.selectedNode = node;
  }

  onRequest(parent: ITreeNode) {
    this.treeService.GetNodes(parent._id).subscribe(
      (res: ITreeNode[]) => parent.children = res,
      error => console.log(error));
  }
}
