import {Injectable} from "angular2/core";

/**
 *  Persistent localStorage interface;
 */

@Injectable()
export default class AppLocalStorage <T> {

  private storage = localStorage;

  constructor(private key: string) {}

  store(data: T): void {
    this.storage.setItem(this.key, JSON.stringify(data))
  }

  restore(): T {
    return JSON.parse(this.storage.getItem(this.key))
  }

  clear(): void {
    this.storage.removeItem(this.key)
  }

}
