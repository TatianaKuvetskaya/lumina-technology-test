import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {INode} from './interfaces';
import {combineLatest} from 'rxjs';

@Injectable()
export class TreeService {

  constructor(public http: HttpClient) {
  }

  GetNodes(parentId: number) {
    return this.http.get(`/childs/${parentId}`);
  }

  GetStartNods() {
    return this.http.get('')
      .toPromise()
      .then((nodes: INode[]) => {
          let parentNode = nodes.filter(node => node.parentNode === null)[0];
          return combineLatest(
            this.http.get(`/${parentNode._id}`),
            this.http.get(`/childs/${parentNode._id}`)
          )
            .toPromise()
            .then(([node, children]) => {
              return parentNode = {
                ...node[0],
                children
              };
            });
        },
        error => console.log(error));
  }
}
