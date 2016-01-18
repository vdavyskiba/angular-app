import {Injectable} from "angular2/core";
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/share';

@Injectable()
export default class ObservableCollection <T> {

  public collection$: Observable<Array<T>>;

  private _collectionObserver: any;

  private _collection: Array<T>;

  constructor() {

    this._collection = [];

    this.collection$ = new Observable(observer => this._collectionObserver = observer).share();
  }

  public publish(value: T[]) {

    this._collection = value;

    this._collectionObserver.next(value);
  }

  public load() {

    this._collectionObserver.next(this._collection);
  }
}
