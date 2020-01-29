import { Injectable } from '@angular/core';
import { Site } from 'src/app/entities';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SiteService {

  constructor(private httpClient: HttpClient) { }

  searchSites(site: Site): Observable<Site[]> {
    //const url = 'https://my.api.mockaroo.com/sites.json?key=6ece90b0';
    const url = '/assets/mocks/sites.json';

    return this.httpClient.get<Site[]>(url).pipe(
      map(x => x.map(c => new Site(c))));
  }

}
