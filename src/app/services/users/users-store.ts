import {Injectable} from "angular2/core";

import IUser from '../../models/user/user';
import UsersService from "./users-service";
import AppLocalStorage from "../../core/services/storage/local-storage";
import {Observable} from "rxjs/Observable";

@Injectable()
export default class UsersStore {

  private storageKey: string = '_users-list_';

  private storage: AppLocalStorage<Set<IUser>>;

  constructor( private service: UsersService ){

    this.storage = new AppLocalStorage<Set<IUser>>(this.storageKey);

  }

  list(){

    let $this = this;

    //TODO:Shims for cache
   //return this.service.list();

    return new Observable(observer => {

      $this.service.list().subscribe((users:IUser[]) => {

        /*let result:Array<IUser>;

        let stored:Set<IUser> = $this.storage.restore();

        if(stored && stored.size){

          result = Array.from(stored.values());
        } else {

          result = users;

          stored = new Set<IUser>(result)

          $this.storage.store(stored)
        }*/

        observer.next(users)

      });
    });

  }

  byId(userId:number){

    let $this = this;

    //TODO: Shim: server support is not implemented
    //return this.service.byId(userId)

    return new Observable(observer => {

      $this.service.list().subscribe(users => {

        let found:IUser = users.find(user => user._id === userId);

        observer.next(found)

      });
    });
  }

  add(user:IUser) {

    //TODO: Shim: server support is not implemented
    //return this.service.add(user);

    return new Observable(observer => {

      //this.storage.put()

      observer.next(user)

    });

  }

  remove(id:number) {

    //TODO: Shim: server support is not implemented
    //return this.service.remove(id);

    return new Observable(observer => {

      //this.storage.remove(id)

      observer.next(id)

    });

  }

}
