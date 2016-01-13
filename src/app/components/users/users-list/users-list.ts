import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Observable} from "rxjs/Observable";

import FilterPipe from "../../../core/pipes/filter";
import IUser from "../../../models/user/user";
import UsersStore from "../../../services/users/users-store";
import User from "../../../models-impl/user/user";

import 'rxjs/add/observable/fromArray';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/concatAll';
import 'rxjs/add/operator/mergeAll';


const template = require('./users-list.html');
const styles = require('./users-list.css');

@Component({
  selector: 'div[data-ng-users-list]',
  template: template,
  styles: [styles],
  pipes:[FilterPipe],
  directives: [ROUTER_DIRECTIVES]
})

export default class UsersList {

  private inc:number = 10;

  users: Array<IUser>;

  user:IUser;

  filterText: string;

  constructor(private usersService: UsersStore) {

    this.usersService.list().subscribe((results:IUser[]) => this.users = results );

  }

  create():void{

    let user:IUser = new User(++this.inc,'testusernamevasya','vasya@.ru', Date.now());

    this.usersService.add(user)
      .subscribe(result =>{
        this.users.push(user);
      });
  }

  remove(user:IUser):void{

    this.usersService.remove(user._id)
      .subscribe(result => {
        this.users.splice(this.users.indexOf(user), 1);
      });

  }


}
