import { Component, OnInit } from '@angular/core';
import {AuthGuardService} from '../../auth/auth-guard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapse = true;

  constructor(private authGuard: AuthGuardService) { }

  ngOnInit() {
  }

  logout() {
    this.authGuard.onLogout();
  }
}
