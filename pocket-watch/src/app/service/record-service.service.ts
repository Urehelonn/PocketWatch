import { Injectable } from '@angular/core';
import { AchievementRecord } from '../models/achievementRecord';
import { Achievement } from '../models/achievement';
import { DesireRecord } from '../models/desireRecord';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  records: (AchievementRecord|DesireRecord)[]=[];
  constructor() { }

  addAchievementToRecord(achievement: Achievement){
    let achievementRecord: AchievementRecord = new AchievementRecord();
    this.records.push(achievementRecord);
  }
}
