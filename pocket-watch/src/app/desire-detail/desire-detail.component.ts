import { Component, OnInit } from '@angular/core';
import { Desire } from '../models/desire';
import { DesireService } from '../service/desire-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-desire-detail',
  templateUrl: './desire-detail.component.html',
  styleUrls: ['./desire-detail.component.css']
})
export class DesireDetailComponent implements OnInit {

  desire: Desire;

  constructor(private desireService: DesireService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    let id: number = +(this.activeRoute.snapshot.paramMap.get("id"));
    this.desire = this.desireService.getDesireById(id);
    console.log(this.desire);
  }
}
