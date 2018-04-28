import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {AuthGuardService} from '../auth-guard.service';

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

  constructor(private auth: AuthService, private authGuard: AuthGuardService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.user.username = this.submitForm.value.username;
    this.user.password = this.submitForm.value.password;

    this.auth.signIn(this.user)
      .subscribe(
        (response: any) => {
          this.authGuard.onLogin(response.user.username);
          this.submitForm.reset();
          console.log(response);
        },
        (error) => console.log(error)
      );
  }
}
