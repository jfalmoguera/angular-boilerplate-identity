import { Injectable } from '@angular/core';
import { Site } from 'src/app/entities';
import { Observable, of } from 'rxjs';
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

  getById(id: string): Observable<Site> {

    id = '1';
    //const url = 'https://my.api.mockaroo.com/sites.json?key=6ece90b0';
    const url = `/assets/mocks/site-${id}.json`;

    return this.httpClient.get<Site[]>(url).pipe(
      map(x => new Site(x)));

  }

  save(site: Site): Observable<Site> {

    if (!site) {
      return of(null);
    }

    if (site.id) {
      const url = `.....sites/${site.id}`;
      return this.httpClient.put<Site>(url, site).pipe(map(x => new Site(x)));
    } else {
      const url = `.....sites`;
      return this.httpClient.post<Site>(url, site).pipe(map(x => new Site(x)));
    }

  }

}
