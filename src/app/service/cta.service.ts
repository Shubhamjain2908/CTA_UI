import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CtaService {

  public loader = true;

  constructor(private http: HttpClient) {}

  getCoins(end: number) {
    return this.http.get('https://api.coinmarketcap.com/v1/ticker/?start=0&limit=' + end);
  }

  getCoin(id: string, convert: string) {
    return this.http.get('https://api.coinmarketcap.com/v1/ticker/' + id + '/?convert=' + convert);
  }
}
