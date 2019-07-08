import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CurrencyService {
    currency: number = 0;
    
    constructor() {}

    getCurrency(): number{
        return this.currency;
    }

    addCurrency(num: number){
        this.currency+=num;
    }

    reduceCurrency(num:number){
        this.currency-=num;
    }
}