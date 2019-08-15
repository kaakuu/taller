import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, publishReplay, refCount } from 'rxjs/operators';

export interface Image {
  name: string;
  data64: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataCacheService {

  images: Observable<Image[]>;

  constructor(private httpClient: HttpClient) { }

  getImages(): Observable<Image[]> {

    // Cache it once if configs value is false
    if (!this.images) {
      console.log('vacio...');
      this.images = this.httpClient.get('./../assets/images.json').pipe(
        map(data => data['images']),
        publishReplay(1), // this tells Rx to cache the latest emitted
        refCount() // and this tells Rx to keep the Observable alive as long as there are any Subscribers
      );
    }

    return this.images;
  }

  // Clear configs
  clearCache() {
    this.images = null;
  }

}
