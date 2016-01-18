import {Injectable} from "angular2/core";
import {Http} from "angular2/http";

import HTTPService from "../../core/services/http/http-service";
import IUser from "../../models/user/user";


@Injectable()
export default class UsersService extends HTTPService<IUser> {

  /**
   *@override
   */
  protected basepath: string = 'fake-users.json';

  /**
   *@override
   */
  constructor(http:Http ) {
    super(http);
  }

}
