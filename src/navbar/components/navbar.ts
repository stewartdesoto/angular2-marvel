import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { Location } from 'angular2/router';
@Component({
  selector: 'navbar',
  moduleId: module.id,
  templateUrl: './navbar.html',
  directives: [ROUTER_DIRECTIVES]
})
export class Navbar {
  constructor(public _location: Location) {};
}
