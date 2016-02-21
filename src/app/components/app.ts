import {Component, ViewEncapsulation} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { HTTP_PROVIDERS } from 'angular2/http';
import { ComicService } from '../../services/comic_service';
import { HomeComponent }   from '../../home/components/home';
import { AboutComponent }  from '../../about/components/about';
import { SearchComponent } from '../../search/components/search';
import { NameList } from '../../shared/services/name_list';
import { Navbar } from '../../navbar/components/navbar';

@Component({
  selector: 'app',
  viewProviders: [NameList],
  moduleId: module.id,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, Navbar, HomeComponent,
      AboutComponent, SearchComponent],
  providers: [HTTP_PROVIDERS, ComicService]
})
@RouteConfig([
  { path: '/', component: HomeComponent, name: 'Home' },
  { path: '/search', component: SearchComponent, name: 'SearchName' },
  { path: '/about', component: AboutComponent, name: 'About' }
])
export class AppComponent {}
