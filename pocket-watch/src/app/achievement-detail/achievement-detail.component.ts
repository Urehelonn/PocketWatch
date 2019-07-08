import { Component, OnInit } from '@angular/core';
import { Achievement } from '../models/achievement';
import { AchievementService } from '../service/achievement-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-achievement-detail',
  templateUrl: './achievement-detail.component.html',
  styleUrls: ['./achievement-detail.component.css']
})
export class AchievementDetailComponent implements OnInit {

  achievement: Achievement;

  constructor(private achievementService: AchievementService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    let id: number = +(this.activeRoute.snapshot.paramMap.get("id")); 
    this.achievement = this.achievementService.getAchievementById(id);
  }

}
