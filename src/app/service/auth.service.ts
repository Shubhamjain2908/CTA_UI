import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from "../models/user.model";

@Injectable()
export class AuthService {

  url = 'http://localhost:9393';

  constructor(private http: HttpClient) {  }

  signUp(data: UserModel) {
    return this.http.post(this.url + '/v1/users/signup', data);
  }

  signIn(data: any) {
    return this.http.post(this.url + '/v1/users/signin', data);
  }

  updateUser(data: any) {
    return this.http.put(this.url + '/v1/users/update', data);
  }
}
