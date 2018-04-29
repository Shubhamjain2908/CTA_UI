import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {AuthGuardService} from '../auth-guard.service';
import {CtaService} from '../../service/cta.service';
import {UserModel} from '../../models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('f') submitForm: NgForm;
  public user: UserModel;

  constructor(private auth: AuthService,
              private authGuard: AuthGuardService,
              private coinsService: CtaService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.coinsService.loader = true;
    this.user = new UserModel(this.submitForm.value.username.toString(),
                              this.submitForm.value.name.toString(),
                              this.submitForm.value.number.toString(),
                              this.submitForm.value.email.toString(),
                              this.submitForm.value.password.toString(),
                              this.submitForm.value.dob.toString(),
                              null);

    this.auth.signUp(this.user)
      .subscribe(
        (response: any) => {
          this.coinsService.loader = false;
          this.authGuard.onLogin(response.user.username, response.user.favCoins);
          alert(response.message);
          this.router.navigate(['/dashboard']);
          this.submitForm.reset();
        },
        (error) => {
          console.log(error);
          this.router.navigate(['/not-found']);
        }
      );
  }

}
