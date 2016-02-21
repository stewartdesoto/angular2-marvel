import { Component } from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import { ComicService } from '../../services/comic_service';

@Component({
  selector: 'search',
  moduleId: module.id,
  templateUrl: './search.html',
  directives: [CORE_DIRECTIVES]
})
export class SearchComponent {

  constructor (private _comicService: ComicService) {
    console.log(' ComicService constructed');
  };

  searchterm: string;
  private stuff: any;

  searchComics(event): boolean {
    event.preventDefault();
    console.log(this.searchterm);
    console.log(event);
    this._comicService.getComics()
                      .subscribe(
                        stuff => console.log(stuff),
                        error => console.error(error)
                      );
    console.log(this.searchterm);
    console.log(this.stuff);
    return false;
  }
}
