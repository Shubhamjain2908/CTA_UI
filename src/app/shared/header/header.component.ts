import { Component, OnInit } from '@angular/core';
import {AuthGuardService} from '../../auth/auth-guard.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapse = true;

  constructor(private authGuard: AuthGuardService, private route: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authGuard.onLogout();
    this.route.navigate(['/home']);
  }
}
