import { Component, OnInit, Input } from '@angular/core';
import { Achievement } from 'src/app/models/achievement';
import { AchievementService } from 'src/app/service/achievement-service.service';

@Component({
  selector: 'app-individual-achievement',
  templateUrl: './individual-achievement.component.html',
  styleUrls: ['./individual-achievement.component.css']
})
export class IndividualAchievementComponent implements OnInit {

  @Input() id: number;
  achievement: Achievement;
  
  constructor(private achievementService: AchievementService) { }

  ngOnInit() {
    this.achievement = this.achievementService.getAchievementById(this.id);
  }

  removeAchievement(){
    console.log("removed "+this.id);
    this.achievementService.deleteAchievement(this.id);
  }

  finishAchievement(){
    console.log("attempting finish achievemnt: "+this.id);
    this.achievementService.finishAchievement(this.id);
  }
  

}
