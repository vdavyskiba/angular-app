import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {ROUTER_DIRECTIVES} from "angular2/router";

import UsersStore from "../../../services/users/users-store";
import IUser from "../../../models/user/user";
import {Observable} from "rxjs/Observable";


const template = require('./user.html');
const styles = require('./user.css');

@Component({
  selector: 'div[data-ng-user]',
  template: template,
  styles: [styles],
  directives: [ROUTER_DIRECTIVES]
})

export default class User {

  private user: Observable<IUser>;

  constructor(
    routeParams:RouteParams,
    usersService: UsersStore
  ) {

    this.user = usersService.byId(+routeParams.get('id'));

  }

}
