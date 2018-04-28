import { Component, OnInit } from '@angular/core';
import {CtaService} from '../service/cta.service';
import {AuthGuardService} from '../auth/auth-guard.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  coins = [];

  user = {
    username: '',
    favCoins: []
  };

  constructor(private coinsService: CtaService, private authGuard: AuthGuardService) {
    coinsService.loader = true;
  }
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.coinsService.loadCoins()
      .subscribe(
        (response: any) => {
          this.coins = response;
          this.coinsService.loader = false;
          },
        (error) => console.log(error)
      );
  }

  addCoins(e) {
    if (e.target.checked) {
      console.log(e.target.value);
      this.user.favCoins.push(e.target.value);
      alert('Coin successfully added');
      console.log(this.user.favCoins);
    } else {
      this.user.favCoins.pop();
      console.log('You Did not select this item');
      console.log(this.user.favCoins);
    }
  }
}
