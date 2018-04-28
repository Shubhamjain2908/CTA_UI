import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {AuthGuardService} from '../auth-guard.service';
import {CtaService} from '../../service/cta.service';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('f') submitForm: NgForm;
  public user: UserModel;

  constructor(private auth: AuthService, private authGuard: AuthGuardService, private coinsService: CtaService) { }

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
          this.authGuard.onLogin(response.user.username);
          this.submitForm.reset();
          console.log(response);
        },
        (error) => console.log(error)
      );

  }

}
