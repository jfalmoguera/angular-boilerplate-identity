import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IdValue } from 'src/app/entities';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class DataReferenceService {

  constructor(private httpClient: HttpClient) { }

  getContries(): Observable<Array<IdValue>> {

    const url = 'https://my.api.mockaroo.com/countries.json?key=6ece90b0';

    return this.httpClient.get<IdValue[]>(url)
      .pipe(map(x => x.map(e => new IdValue(e))));

  }
}
