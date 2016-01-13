import {Injectable} from "angular2/core";

/**
 *  Persistent localStorage interface;
 */

@Injectable()
export default class AppLocalStorage <S> {

  constructor(private key: string) {}

  store(data: S): void {
    localStorage.setItem(this.key.toString(), JSON.stringify(data))
  }

  restore(): S {
    return JSON.parse(localStorage.getItem(this.key.toString()))
  }

  clear(): void {
    localStorage.removeItem(this.key.toString())
  }

  put<V extends Object>(subkey: number | string, val:V): void {
    let v = this.restore();
    v[subkey] = val;
    this.store(v);
  }

  get <V extends Object> (subkey: number | string): V {
    let v = this.restore();
    return v[subkey];
  }

  remove(subkey: number | string): void {
    let v = this.restore();
    delete v[subkey];
    this.store(v);
  }

}
