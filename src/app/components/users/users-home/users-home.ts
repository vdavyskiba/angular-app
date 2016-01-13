import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import Default from "../../../core/components/default/default";
import User from "../user/user";

import UsersList from "../users-list/users-list";
import UsersStore from "../../../services/users/users-store";
import UsersService from "../../../services/users/users-service";
import AppLocalStorage from "../../../core/services/storage/local-storage";

const template = require('./users-home.html');
const styles = require('./users-home.css');

@Component({
  selector: 'div[data-ng-users-home]',
  template: template,
  styles: [styles],
  directives: [ROUTER_DIRECTIVES, UsersList],
  providers: [UsersStore, UsersService, AppLocalStorage]
})

@RouteConfig([
  {path: '/', component: Default, name: '/', useAsDefault: true},
  {path: '/user/:id', component: User, name: 'User'}
])

export default class UsersHome {

  constructor() {}

}
