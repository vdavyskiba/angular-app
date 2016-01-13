import {Injectable} from "angular2/core";

import IUser from "../../models/user/user";

@Injectable()
export default class User implements IUser{

  constructor(
    public _id:number,
    public username:string,
    public email:string,
    public created:number
  ){}

  first: string;
  last: string;
  active: boolean;
  balance: number;
  details: string;


}
