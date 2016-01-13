import {Component} from "angular2/core";

/**
 * Dummy Default component - workaround for nested routes in New Angular Router
 * Fixes Error "Link {...} does not resolve to a terminal instruction."
 * Related Bugs: https://github.com/angular/router/issues/383, https://github.com/angular/angular/issues/6204
 */

@Component({
  selector: 'div[data-ng-default]',
  template:''
})

export default class Default {

  constructor() {}

}
