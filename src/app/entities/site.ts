export class Site {

    id: string | number;
    name: string;
    countryId: string;
    countryDescr: string;
    enable: boolean;
    sessionExpiration: Date;
    language: string;

    constructor(item?: any) {
        this.id = item && item.id ? item.id : '';
        this.name = item && item.name ? item.name : '';
        this.countryId = item && item.countryId ? item.countryId : '';
        this.countryDescr = item && item.countryDescr ? item.countryDescr : '';
        this.enable = item && item.enable && item.enable !== null ? item.enable : false;
        this.sessionExpiration = item && item.sessionExpiration ? item.sessionExpiration : null;
        this.language = item && item.language ? item.language : '';
    }



}