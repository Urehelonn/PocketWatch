import { Component, OnInit } from '@angular/core';
import { Achievement } from 'src/app/models/achievement';
import { AchievementService } from 'src/app/service/achievement-service.service';

@Component({
  selector: 'app-achievement-list',
  templateUrl: './achievement-list.component.html',
  styleUrls: ['./achievement-list.component.css']
})
export class AchievementListComponent implements OnInit {
  
  achievements: Achievement[];
  
  constructor(private achievementService: AchievementService) {
  }

  ngOnInit() {
    this.achievementService.getAchievements()
    .subscribe(achievements=>{this.achievements=achievements});    
  }

}
