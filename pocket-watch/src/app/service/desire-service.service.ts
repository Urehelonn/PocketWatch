import { Injectable } from '@angular/core';
import { CurrencyService } from './currency-service.service';

@Injectable({
    providedIn: 'root'
})
export class DesireService {
    
    constructor(private currencyService: CurrencyService){}

}