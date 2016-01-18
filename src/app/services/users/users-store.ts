import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";

import IUser from '../../models/user/user';
import UsersService from "./users-service";
import AppLocalStorage from "../../core/services/storage/local-storage";
import ObservableCollection from "../../core/collection/observableCollection";

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
import {Observer} from "rxjs/Observer";

@Injectable()
export default class UsersStore {

  private storageKey: string = '_users-list_';

  private storage: AppLocalStorage<Array<IUser>>;

  constructor(

    private service: UsersService,

    private collection: ObservableCollection<IUser>

  ){

    this.storage = new AppLocalStorage<Array<IUser>>(this.storageKey);

  }

  public subscribe(callback: Function): void {

    this.collection.collection$.subscribe(res => callback(res));

    this.collection.load();
  }

  public refresh(): void {

    this.list().subscribe(data => this.collection.publish(data));

  }

  public list(): Observable<Array<IUser>> {

    //return this.service.list();

    return this.mock();
  }

  public byId(id:number): Observable<IUser> {

    //return this.service.byId(id);

    return this.mock((data:Array<IUser>): IUser => {

      return data.find(item => item._id === id);

    });
  }

  public add(user:IUser): Observable<IUser> {

    //return this.service.add(user);

    return this.mock((data:Array<IUser>): IUser => {

      data.push(user);

      this.storage.store(data);

      return user;

    });

  }

  public update(user:IUser): Observable<IUser> {

    //return this.service.update(user._id, user);

    return this.mock((data:Array<IUser>): IUser => {

      let idx: number = data.findIndex(item => item._id === user._id);

      data[idx] = user;

      this.storage.store(data);

      return user;

    });

  }

  public remove(id:number): Observable<any> {

    //return this.service.remove(id);

    return this.mock((data:Array<IUser>): number => {

      data = data.filter(item => item._id !== id);

      this.storage.store(data);

      return id;

    });
  }

  /**
   * network service mock
   */
  private mock(callback?: Function): Observable<any> {

    let $this = this;

    return new Observable((observer) => {

      let next = (data:any): void => {
        $this.storage.store(data);
        observer.next(callback ? callback(data) : data);
      };

      let data: Array<IUser> = $this.storage.restore();

      if(data && data.length){

        next(data);

      } else {

        $this.service.list().subscribe(data => next(data));
      }

    });

  }


}
