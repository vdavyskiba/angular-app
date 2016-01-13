import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import UsersStore from "../../../services/users/users-store";
import IUser from "../../../models/user/user";


const template = require('./user.html');
const styles = require('./user.css');

@Component({
  selector: 'div[data-ng-user]',
  template: template,
  styles: [styles],
  directives: []
})

export default class User {

  user: IUser;

  constructor(routeParams:RouteParams, usersService: UsersStore) {

    let userId = +routeParams.get('id');

    usersService.byId(userId).subscribe((data:IUser) => this.user = data );

  }

}
