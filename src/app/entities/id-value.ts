export class IdValue {
    id: string;
    value: string;

    constructor(item?: any) {
        this.id = item && item.id ? item.id : '';
        this.value = item && item.value ? item.value : '';
    }

}