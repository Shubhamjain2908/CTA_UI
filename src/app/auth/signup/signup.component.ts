import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('f') submitForm: NgForm;

  user = {
    username: '',
    email: '',
    name: '',
    mobile: '',
    dob: '',
    password: ''
  };

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.user.username = this.submitForm.value.username;
    this.user.email = this.submitForm.value.email;
    this.user.name = this.submitForm.value.name;
    this.user.mobile = this.submitForm.value.number;
    this.user.dob = this.submitForm.value.dob;
    this.user.password = this.submitForm.value.password;

    this.auth.signUp(this.user)
      .subscribe(
        (response: any) => {
          this.submitForm.reset();
          console.log(response);
        },
        (error) => console.log(error)
      );

  }

}
