import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {

  url = 'http://localhost:9393';

  constructor(private http: HttpClient) {  }

  signUp(data: any) {
    return this.http.post(this.url + '/v1/users/signup', data);
  }

  signIn(data: any) {
    return this.http.post(this.url + '/v1/users/signin', data);
  }
}
