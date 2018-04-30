import { Component, OnInit } from '@angular/core';
import {CtaService} from '../service/cta.service';
import {AuthGuardService} from '../auth/auth-guard.service';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  coins = [];

  user = {
    username: this.authGuard.username,
    favCoins: this.authGuard.favCoins
  };

  constructor(private coinsService: CtaService, public authGuard: AuthGuardService, private auth: AuthService) {
    coinsService.loader = true;
    this.loadCoins();
  }
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    setInterval(() => {
      this.coinsService.loader = true;
      this.loadCoins();
    }, 300000);   // Load Coins Every 5 min
  }

  loadCoins() {
    this.coinsService.loadCoins()
      .subscribe(
        (response: any) => {
          this.coins = response;
          this.coinsService.loader = false;
        },
        (error) => {
          alert('Internal server error : ' +
            'Check your internet connection');
          this.coinsService.loader = false;
        }
      );
  }

  addCoins(e) {
    if (confirm('Are you sure you want to Add favourites : ' + e.target.value) ) {
      if (e.target.checked) {
        console.log(e.target.value);
        this.user.favCoins.push(e.target.value);
        this.update();
        console.log(this.user.favCoins);
      }
    } else {
      console.log('Not Checked');
      e.target.checked = false;
    }
  }

  update() {
    this.auth.updateUser(this.user.username, this.user.favCoins)
      .subscribe(
        (response: any) => {
          console.log(response);
          alert('Currency Successfully added to your favourites');
        },
        (error) => {
          this.user.favCoins.pop();
          console.log(error);
          alert(error.error.message);
        }
      );
  }
}
