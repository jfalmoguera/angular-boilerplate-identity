import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Translation } from '@ngneat/transloco';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoHttpLoader {
    constructor(private http: HttpClient) { }

    getTranslation(lang: string) {
        return this.http.get<Translation>(`./assets/i18n/${lang}.json`);
    }
}
