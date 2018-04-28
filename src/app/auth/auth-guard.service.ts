import {Injectable, OnInit} from '@angular/core';

@Injectable()
export class AuthGuardService implements OnInit {

  isLogin = false;
  username: string;
  constructor () {}

  ngOnInit() {

  }

  onLogin(username) {
    this.username = username;
    this.isLogin = true;
  }

  onLogout() {
    this.isLogin = false;
  }
}
