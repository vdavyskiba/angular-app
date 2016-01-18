import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Router} from "angular2/router";

//services
import FilterPipe from "../../../core/pipes/filter";
import IUser from "../../../models/user/user";
import UsersStore from "../../../services/users/users-store";
import User from "../../../models-impl/user/user";

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

  private users: Array<IUser>;

  private filterText: string;

  constructor(

    private usersService: UsersStore,
    private router: Router

  ) {

    this.usersService.subscribe(data => this.users = data && data.length ? data : null);

    this.usersService.refresh();

  }

  private remove(user:IUser): void {
    let $this = this;
    this.usersService.remove(user._id)
      .subscribe(() => {
        $this.usersService.refresh();
        $this.router.parent.navigate(['UsersHome'])
      });

  }

}
