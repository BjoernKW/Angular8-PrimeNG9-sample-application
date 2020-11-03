import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TreeNode } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor(private http: HttpClient) {
  }

  getFilesystem() {
    return this.http.get<any>('assets/data/filesystem.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
  }

  getLazyFilesystem() {
    return this.http.get<any>('assets/data/filesystem-lazy.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
  }
}
