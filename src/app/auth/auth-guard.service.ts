import {Injectable, OnInit} from '@angular/core';

@Injectable()
export class AuthGuardService implements OnInit {

  isLogin = false;
  username: string;
  favCoins = [];
  constructor () {}

  ngOnInit() {

  }

  onLogin(username, favCoins) {
    this.username = username;
    if (favCoins !== undefined) {
      this.favCoins = favCoins;
    } else {
      this.favCoins.splice(0);
    }
    this.isLogin = true;
  }

  onLogout() {
    this.isLogin = false;
  }
}
