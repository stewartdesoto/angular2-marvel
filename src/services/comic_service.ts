import { Injectable } from 'angular2/core';
import { Http, RequestOptions, URLSearchParams } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/operator/delay';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/switchMap';

@Injectable()
export class ComicService {

  static BASE_URL: string = 'http://gateway.marvel.com/v1/public/comics';

  // dependency injection
  constructor (private http: Http) {
    console.log('constructing ComicService');
  }

  getComics(): Observable<any> {
    console.log('comic service -> getComics()');
    const search: URLSearchParams = new URLSearchParams();
    search.set('title','amazing spider-man');
    search.set('issueNumber', '129');
    search.set('ts', '1'); // time stamp
    search.set('apikey', '9366915fcb4f13edff9240303556698b');
    search.set('hash', 'e76ca46781e978e95ce48270377cd33f');
    console.log(search);
    let obs: Observable<any> = this.http
      .get(ComicService.BASE_URL, new RequestOptions({search}))
      .map( (response: any) => response.json());
    return obs;
  }

  // private handleError (error: Response) {
  //   console.error(error);
  //   return Observable.throw(error.json().error || 'Server error');
  // }
}
