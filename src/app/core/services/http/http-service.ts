import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromArray';

/**
 * Network CRUD interface
 */

@Injectable()
abstract class HTTPService <T extends Object> {

  protected basepath: string = '';

  constructor(private http: Http){

  }

  list(): Observable<Array<T>> {
    let url = [ this.basepath, ].join('');
    return this.http.get(url).map(res => res.json());
  }

  byId(id:number): Observable<Array<T>> {
    let url = [ this.basepath, '/', id ].join('');
    return this.http.get(url).map(res => res.json());
  }

  add(data: T): Observable<T> {
    let url = [ this.basepath, '/add' ].join('');
    return this.http.post(url, JSON.stringify(data)).map(res => <T>res.json());
  }

  update(id:number, data: T): Observable<T> {
    let url = [ this.basepath, '/update/', id ].join('');
    return this.http.post(url, JSON.stringify(data)).map(res => <T>res.json());
  }

  remove(id:number ): Observable<T> {
    let url = [ this.basepath, '/delete/', id ].join('');
    return this.http.delete(url).map(res => res.json());
  }

}

export default HTTPService;
