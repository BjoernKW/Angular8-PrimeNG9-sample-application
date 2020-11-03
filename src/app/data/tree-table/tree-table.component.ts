import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../service/node.service';

@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  styleUrls: ['./tree-table.component.scss']
})
export class TreeTableComponent implements OnInit {

  files1: TreeNode[];
  files2: TreeNode[];

  constructor(private _nodeService: NodeService) {
  }

  ngOnInit() {
    this._nodeService.getFilesystem().then(files => this.files1 = files);
    this._nodeService.getFilesystem().then(files => this.files2 = files);
  }
}
