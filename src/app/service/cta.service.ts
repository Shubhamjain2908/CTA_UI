import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CtaService {

  constructor(private http: HttpClient) {}

  loadCoins() {
    return this.http.get('https://api.coinmarketcap.com/v1/ticker/');
  }
}
