import { Injectable } from '@angular/core';
import { CurrencyService } from './currency-service.service';
import { Desire } from '../models/desire';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DesireService {
    // constructor(id, name, description, worth, time, date, alarm, tag, repeat)
    desires: Desire[] = [
        new Desire(0, "watch a horror movie", "i wanna watch a horror movie", 15, null, null, null, null, null),
        new Desire(2, "play LOL", "wanna play vn", 5, null, null, null, null, null),
        new Desire(1, "get a new skin on sale", "if there are any good skin on sale", 45, null, null, null, null, null),
        new Desire(3, "read novels", "", 15, null, null, null, null, null),
        new Desire(7, "eat candy", "", 1, null, null, null, null, null),
    ];

    constructor(private currencyService: CurrencyService) { }

    getDesires(): Observable<Desire[]> {
        return of(this.desires);
    }

    getDesireById(id: number): Desire | null {
        for (let i = 0; i < this.desires.length; i++) {
            if (this.desires[i].id === id) {
                return this.desires[i];
            }
        }
        return null;
    }
    deleteDesire(id: number): boolean {
        for (let i = 0; i < this.desires.length; i++) {
            if (this.desires[i].id === id) {
                this.desires.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    addDesire(desire: Desire) {
        this.desires.push(desire);
        console.log(this.desires);
    }

    generateNewDesireId(): number {
        let used: number = 0;
        for (let i = 0; i < this.desires.length; i++) {
            if (this.desires[i].id === used) {
                used++;
            }
        }
        return used;
    }
}