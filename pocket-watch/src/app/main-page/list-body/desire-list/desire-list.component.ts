import { Component, OnInit } from '@angular/core';
import { Desire } from 'src/app/models/desire';
import { DesireService } from 'src/app/service/desire-service.service';

@Component({
  selector: 'app-desire-list',
  templateUrl: './desire-list.component.html',
  styleUrls: ['./desire-list.component.css']
})
export class DesireListComponent implements OnInit {

  desires: Desire[];
  constructor(private disireService: DesireService) { }

  ngOnInit() {
    this.disireService.getDesires()
    .subscribe(desires=>this.desires=desires); 
  }
}
