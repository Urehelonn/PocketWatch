import { Component, OnInit } from '@angular/core';
import { AchievementService } from '../service/achievement-service.service';
import { CurrencyService } from '../service/currency-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  balance: number;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.balance=this.currencyService.getCurrency();
  }

}
