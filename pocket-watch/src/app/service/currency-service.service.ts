import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CurrencyService {
    currency: number = 13;
    
    constructor() {}

    getCurrency(): Observable<number>{
        console.log(of(this.currency));
        return of(this.currency);
    }
    
    addCurrency(num: number){
        this.currency+=num;
        console.log("currency added: "+this.currency);
    }

    reduceCurrency(num:number){
        // this.currency-=num;
    }
}