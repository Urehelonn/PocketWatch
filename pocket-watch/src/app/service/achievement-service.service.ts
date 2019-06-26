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
    , 15, null, null, new Alarm(), new Tag(), new Repeat),
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

  deleteAchievement(){

  }
}
