import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {AuthGuardService} from '../auth-guard.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @ViewChild('f') submitForm: NgForm;

   user = {
     username: '',
     password: ''
   };

  constructor(private auth: AuthService, private authGuard: AuthGuardService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.user.username = this.submitForm.value.username;
    this.user.password = this.submitForm.value.password;

    this.auth.signIn(this.user)
      .subscribe(
        (response: any) => {
          this.authGuard.onLogin(response.user.username, response.user.favCoins);
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          if (error.status === 302) {
            this.authGuard.onLogin(error.error.user.username, error.error.user.favCoins);
            this.router.navigate(['/dashboard']);
          } else {
            alert(error.error.message);
            this.router.navigate(['/not-found']);
          }
          console.log(error);
        }
      );
  }
}
