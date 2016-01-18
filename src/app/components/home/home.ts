import {Component} from 'angular2/core';

const template = require('./home.html');
const styles = require('./home.css');

@Component({
  selector: 'div[data-ng-home]',
  template: template,
  styles: [styles],
})

export default class Home {}
