import { Injectable } from '@angular/core';
import { Achievement } from '../models/achievement';
import { Alarm } from '../models/alarm';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {
  constructor() { }
  achievements: Achievement[] = [
    new Achievement("go to sleep", "I need to go to sleep on time."
    , 15, null, null, new Alarm(), new Tag()),
    new Achievement("coding", null
    , 5, null, null, new Alarm(), new Tag()),
    new Achievement("housework", "I need to go to sleep on time."
    , 20, null, null, new Alarm(), new Tag()),
    new Achievement("pick up clothes around the floor", null
    , 5, null, null, new Alarm(), new Tag())
  ];
}
