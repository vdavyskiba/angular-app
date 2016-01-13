import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import Home from './components/home/home';
import UsersHome from "./components/users/users-home/users-home";

const template = require('./app.html');
const styles = require('./app.css');

@Component({
  selector: 'div[data-ng-app]',
  template: template,
  styles: [styles],
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path: '/home', component: Home, name: 'Home', useAsDefault: true},
  { path: '/users/...', component: UsersHome, name: 'UsersHome'}
])

export default class App {

  constructor() {}

}
