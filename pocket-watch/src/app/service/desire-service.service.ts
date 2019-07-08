import { Injectable } from '@angular/core';
import { CurrencyService } from './currency-service.service';
import { Desire } from '../models/desire';
import { Observable, of } from 'rxjs';
import { Tag } from '../models/tag';

@Injectable({
    providedIn: 'root'
})
export class DesireService {
    // constructor(id, name, description, worth, time, date, alarm, tag, repeat)
    private desires: Desire[] = [
        new Desire(0, "watch a horror movie", "i wanna watch a horror movie", 15, null, null, null, new Tag(), null),
        new Desire(2, "play LOL", "wanna play vn", 5, null, null, null, null, null),
        new Desire(1, "get a new skin on sale", "if there are any good skin on sale", 45, null, null, null, new Tag(), null),
        new Desire(3, "read novels", "", 15, null, null, null, new Tag(), null),
        new Desire(7, "eat candy", "", 1, null, null, null, new Tag(), null),
    ];

    private desireIds: number[]=[];

    constructor(private currencyService: CurrencyService) {
        this.initDesireIds();
    }

    //insert all existing ids into desireId collection, so 
    private initDesireIds(){
        for(let i=0;i<this.desires.length;i++){
            this.desireIds.push(this.desires[i].id);
        }
        this.sortIds(0, this.desireIds.length-1); //helper method quicksort id collection
        // console.log(this.desireIds.toString());
    }
    private sortIds(l: number, h: number){
        if(l<h){
            let pivot = this.partition(l, h); 
            this.sortIds(l,pivot-1);
            this.sortIds(pivot+1,h);
        }
    }
    private partition(l:number, h:number): number{
        let p=this.desireIds[h];
        let left = l-1;
        for(let i=l;i<h;i++){
            if(this.desireIds[i]<=p){
                left++;
                this.swap(left, i);
            }
        }
        this.swap(left+1, h);
        return left+1;
    };
    private swap(i:number, j:number){
        let temp=this.desireIds[i];
        this.desireIds[i]=this.desireIds[j];
        this.desireIds[j]=temp;
    }
    private addNewId(id: number){
        let end=false;
        for(let i=0;i<this.desireIds.length;i++){
            if(this.desireIds[i]>id){
                this.desireIds.splice(i,0,id);
                end=true;
                // console.log("id added");
                break;
            }
        }
        if(!end){
            this.desireIds.push(id);
            // console.log("id added");
        }
        // console.log("new ids: "+this.desireIds.toString());
    }

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
        // console.log(this.desires);
    }

    generateNewDesireId(): number {
        console.log("generate desire id called: ");
        let used: number = 0;
        for (let i = 0; i < this.desireIds.length; i++) {
            if(used<this.desireIds[i]){
                break;
            }
            if (this.desireIds[i] == used) {
                // console.log(this.desireIds[i] +" id: "+used);
                used++;
            }
        }
        // console.log("new id: "+used);
        //add new id to the desireId collection
        this.addNewId(used);
        return used;
    }
}