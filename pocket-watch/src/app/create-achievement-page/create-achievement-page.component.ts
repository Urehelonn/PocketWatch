import { Component, OnInit } from '@angular/core';
import { Achievement } from '../models/achievement';
import { AchievementService } from '../service/achievement-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-achievement-page',
  templateUrl: './create-achievement-page.component.html',
  styleUrls: ['./create-achievement-page.component.css']
})
export class CreateAchievementPageComponent implements OnInit {

  achievementForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    worth: new FormControl('')
  });
  submitted = false;

  // name: string;
  // description: string;
  // worth: number;

  constructor(private achievementService: AchievementService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.achievementForm);

    let name = (this.achievementForm.value.name === "") ? "New Achievement" : this.achievementForm.value.name;
    let id: number = this.achievementService.generateNewAchievementId();
    let description = (this.achievementForm.value.description);
    let worth: number = (this.achievementForm.value.worth === "null") ? 0 : (+this.achievementForm.value.worth);

    let achievement: Achievement = new Achievement(id, name,
      description, worth, null, null, null, null, null);
    this.achievementService.addAchievement(achievement);
  }
}
