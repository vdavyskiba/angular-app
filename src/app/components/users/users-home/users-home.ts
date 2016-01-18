import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Router} from "angular2/router";

//components
import Default from "../../../core/components/default/default";
import User from "../user/user";
import UserEdit from "../user-edit/user-edit";
import UsersList from "../users-list/users-list";

//providers
import UsersStore from "../../../services/users/users-store";
import UsersService from "../../../services/users/users-service";
import AppLocalStorage from "../../../core/services/storage/local-storage";
import ObservableCollection from "../../../core/collection/observableCollection";


const template = require('./users-home.html');
const styles = require('./users-home.css');


@Component({
  selector: 'div[data-ng-users-home]',
  template: template,
  styles: [styles],
  directives: [ROUTER_DIRECTIVES, UsersList],
  providers: [UsersStore, UsersService, AppLocalStorage, ObservableCollection]
})

@RouteConfig([
  {path: '/list', component: Default, name: 'List', useAsDefault: true},
  {path: '/user/:id', component: User, name: 'User'},
  {path: '/edit/:id', component: UserEdit, name: 'UserEdit'},
  {path: '/add', component: UserEdit, name: 'UserAdd'}
])

export default class UsersHome {}
