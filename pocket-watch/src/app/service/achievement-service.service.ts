import { Injectable } from '@angular/core';
import { Achievement } from '../models/achievement';
import { Alarm } from '../models/alarm';
import { Tag } from '../models/tag';
import { Repeat } from '../models/repeat';
import { Observable, of } from 'rxjs';
import { CurrencyService } from './currency-service.service';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {
  achievements: Achievement[] = [
    new Achievement(0, "go to sleep", "I need to go to sleep on time."
      , 15, null, null, null, null, null),
    new Achievement(1, "coding", null
      , 5, null, null, new Alarm(), new Tag(), new Repeat),
    new Achievement(2, "housework", "There are lots of housework to do."
      , 20, null, null, new Alarm(), new Tag(), new Repeat),
    new Achievement(3, "pick up clothes around the floor", null
      , 5, null, null, new Alarm(), new Tag(), new Repeat)
  ];
  private achievementIds: number[]=[];

  constructor(private currencyService: CurrencyService) { 
    this.initDesireIds();
  }

  //insert all existing ids into desireId collection, so 
  private initDesireIds() {
    for (let i = 0; i < this.achievements.length; i++) {
      this.achievementIds.push(this.achievements[i].id);
    }
    this.sortIds(0, this.achievementIds.length - 1); //helper method quicksort id collection
    console.log(this.achievementIds.toString());
  }
  private sortIds(l: number, h: number) {
    if (l < h) {
      let pivot = this.partition(l, h);
      this.sortIds(l, pivot - 1);
      this.sortIds(pivot + 1, h);
    }
  }
  private partition(l: number, h: number): number {
    let p = this.achievementIds[h];
    let left = l - 1;
    for (let i = l; i < h; i++) {
      if (this.achievementIds[i] <= p) {
        left++;
        this.swap(left, i);
      }
    }
    this.swap(left + 1, h);
    return left + 1;
  };
  private swap(i: number, j: number) {
    let temp = this.achievementIds[i];
    this.achievementIds[i] = this.achievementIds[j];
    this.achievementIds[j] = temp;
  }
  private addNewId(id: number) {
    let end = false;
    for (let i = 0; i < this.achievementIds.length; i++) {
      if (this.achievementIds[i] > id) {
        this.achievementIds.splice(i, 0, id);
        end = true;
        console.log("id added");
        break;
      }
    }
    if (!end) {
      this.achievementIds.push(id);
      console.log("id added");
    }
    console.log("new ids: " + this.achievementIds.toString());
  }
  getAchievements(): Observable<Achievement[]> {
    return of(this.achievements);
  }

  getAchievementById(id: number): Achievement {
    for (let i = 0; i < this.achievements.length; i++) {
      if (this.achievements[i].id === id) {
        return this.achievements[i];
      }
    }
    return null;
  }

  deleteAchievement(id: number): boolean {
    for (let i = 0; i < this.achievements.length; i++) {
      if (this.achievements[i].id === id) {
        this.achievements.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  addAchievement(achievement: Achievement) {
    this.achievements.push(achievement);
    // console.log(this.achievements);
  }
  generateNewAchievementId(): number {
    console.log("generate desire id called: ");
    let used: number = 0;
    for (let i = 0; i < this.achievementIds.length; i++) {
        if(used<this.achievementIds[i]){
            break;
        }
        if (this.achievementIds[i] == used) {
            used++;
        }
    }
    //add new id to the desireId collection
    this.addNewId(used);
    return used;
}
}
