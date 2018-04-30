import { Component, OnInit } from '@angular/core';
import {AuthGuardService} from '../auth/auth-guard.service';
import {CtaService} from '../service/cta.service';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public coins = [];

  constructor(public authGuard: AuthGuardService, private cta: CtaService, private auth: AuthService) {

  }

  ngOnInit() {
    this.loadCurrency();
  }

  loadCurrency() {
    this.cta.loadCoins()
      .subscribe(
        (response: any) => {
          this.authGuard.favCoins.forEach((value) => {
            response.forEach( (r) => {
              if (r.name === value) {
                this.coins.push(r);
              }
            });
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  delCoins(e) {
    if (confirm('Are you sure you want to delete ' + e.target.value) ) {
      if (e.target.checked) {
        this.authGuard.favCoins.splice(this.authGuard.favCoins.indexOf(e.target.value), 1);
        this.coins.forEach((value) => {
          if (value.name === e.target.value) {
            this.coins.splice(this.coins.indexOf(value), 1);
          }
        });
        console.log(this.coins);
        this.auth.updateUser(this.authGuard.username, this.authGuard.favCoins)
          .subscribe(
            (response: any) => {
              console.log(response);
            },
            (error) => console.log(error)
          );
      }
    } else {
      console.log('Not Checked');
      e.target.checked = false;
    }
  }
}
