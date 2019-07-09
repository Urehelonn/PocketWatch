import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../service/currency-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  balance: number;
  private subscription: Subscription;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.subscription = this.currencyService.getCurrency()
      .subscribe(balance => {
        if (balance) {
          console.log("currency changed from: " + this.balance + " to " + balance);
          this.balance = balance;
        }
        else {
          console.log("fk");
        }
      });
  }

  showBalance() {
    console.log(this.balance);
  }
}
