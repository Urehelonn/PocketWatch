import { Component, OnInit, Input } from '@angular/core';
import { DesireService } from 'src/app/service/desire-service.service';
import { Desire } from 'src/app/models/desire';

@Component({
  selector: 'app-individual-desire',
  templateUrl: './individual-desire.component.html',
  styleUrls: ['./individual-desire.component.css']
})
export class IndividualDesireComponent implements OnInit {

  @Input() id: number;
  desire: Desire;
  
  constructor(private desireService: DesireService) { }

  ngOnInit() {
    this.desire = this.desireService.getDesireById(this.id);
  }

  removeDesire(){
    console.log("removed "+this.id);
    this.desireService.deleteDesire(this.id);
  }
}
