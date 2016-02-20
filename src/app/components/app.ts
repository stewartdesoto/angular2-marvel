import {Component, ViewEncapsulation} from 'angular2/core';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';

import {HomeComponent} from '../../home/components/home';
import {AboutComponent} from '../../about/components/about';
import {NameList} from '../../shared/services/name_list';

@Component({
  selector: 'app',
  viewProviders: [NameList],
  moduleId: module.id,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: HomeComponent, name: 'Home' },
  { path: '/about', component: AboutComponent, name: 'About' }
])
export class AppComponent {}
