import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DesireService } from '../service/desire-service.service';
import { Desire } from '../models/desire';
import { Tag } from '../models/tag';

@Component({
  selector: 'app-create-desire-page',
  templateUrl: './create-desire-page.component.html',
  styleUrls: ['./create-desire-page.component.css']
})
export class CreateDesirePageComponent implements OnInit {

  desireForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    worth: new FormControl('')
  });
  submitted = false;

  constructor(private desireService: DesireService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.desireForm);

    let name = (this.desireForm.value.name === "") ? "New Desire" : this.desireForm.value.name;
    let id: number = this.desireService.generateNewDesireId();
    let description = (this.desireForm.value.description);
    let worth: number = (this.desireForm.value.worth === "null") ? 0 : (+this.desireForm.value.worth);

    let desire: Desire = new Desire(id, name,
      description, worth, null, null, null, new Tag(), null);
    this.desireService.addDesire(desire);

    //also navigate to the main list
    this.router.navigate(['/']);
  }
}
