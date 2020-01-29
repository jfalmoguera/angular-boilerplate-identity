export class User {
    name: string;
    surname: string;
    email: string;

    constructor(item?: any) {

        this.name = item && item.name ? item.name: '';
        this.surname = item && item.surname ? item.surname: '';
        this.email = item && item.email ? item.email: '';
    }
}