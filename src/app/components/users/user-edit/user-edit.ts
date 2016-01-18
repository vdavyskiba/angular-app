import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Router} from "angular2/router";

import UsersStore from "../../../services/users/users-store";
import IUser from "../../../models/user/user";
import User from "../../../models-impl/user/user";

const template = require('./user.html');
const styles = require('./user.css');

@Component({
  selector: 'div[data-ng-user]',
  template: template,
  styles: [styles],
  directives: [ROUTER_DIRECTIVES]
})

export default class UserEdit {

  private user: IUser;

  private userId: string;

  constructor(
    routeParams: RouteParams,
    private usersService: UsersStore,
    private router: Router
  ) {

    this.userId = routeParams.get('id');

    if(this.userId){

      this.usersService.byId(+this.userId).subscribe(data => this.user = data);

    } else {

      this.user = User.create();

    }
  }

  private submit(): void {

    this.userId ? this.save() : this.add();

  }

  private save(): void {

    this.usersService.update(this.user).subscribe(() => this.success());
  }

  private add(): void {

    this.usersService.add(this.user).subscribe(() => this.success());
  }

  private success(): void {

    this.usersService.refresh();

    this.back();

  }

  private back(): void {

    this.router.parent.navigate(['UsersHome'])

  }

}
