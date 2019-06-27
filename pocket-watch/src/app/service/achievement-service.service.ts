import { Injectable } from '@angular/core';
import { Achievement } from '../models/achievement';
import { Alarm } from '../models/alarm';
import { Tag } from '../models/tag';
import { Repeat } from '../models/repeat';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {
  achievements: Achievement[] = [
    new Achievement(0,"go to sleep", "I need to go to sleep on time."
    , 15, null, null, null, null, null),
    new Achievement(1,"coding", null
    , 5, null, null, new Alarm(), new Tag(), new Repeat),
    new Achievement(2,"housework", "There are lots of housework to do."
    , 20, null, null, new Alarm(), new Tag(), new Repeat),
    new Achievement(3,"pick up clothes around the floor", null
    , 5, null, null, new Alarm(), new Tag(), new Repeat)
  ];
  constructor() { }

  getAchievements(): Observable<Achievement[]>{
    return of(this.achievements);
  }

  getAchievementById(id: number): Achievement{
    for(let i=0;i<this.achievements.length;i++){
      if(this.achievements[i].id===id){
        return this.achievements[i];
      }
    }
    return null;
  }

  deleteAchievement(id: number): boolean{
    for(let i=0;i<this.achievements.length;i++){
      if(this.achievements[i].id===id){
        this.achievements.splice(i,1);
        return true;
      }
    }
    return false;
  }

  addAchievement(achievement: Achievement){
    // let achievement = new Achievement(9,"new Achievement", ""
    // , 0, null, null, null, null, null);

    this.achievements.push(achievement);

    console.log("log from service: ");
    console.log(this.achievements);
  }

  generateNewAchievementId(): number{
    let used: number=0;
    for(let i=0;i<this.achievements.length;i++){
      if(this.achievements[i].id===used){
        used++;
      }
    }
    return used;
  }

  
}
