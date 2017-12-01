import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Http, Response} from '@angular/http';
import {environment} from '../../environments/environment';

// injecting service into module
@Injectable()

export class FlickrService {

  key = '425828b267f131116172d6f47ce7345c';
  urlBase = 'https://api.flickr.com/services/rest/?method=' +
    'flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';
  constructor(private _http: Http) {}

  searchPhotos(searchTerm: any) {
    const url = this.urlBase
      .replace('API_KEY', this.key)
      .replace('TEXT', searchTerm);
    return this._http.get(url);
  }
}
