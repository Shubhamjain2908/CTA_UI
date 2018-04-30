import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CtaService} from '../service/cta.service';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css']
})
export class CoinDetailsComponent implements OnInit {

  map = new Map<string, string>();
  id: string;
  constructor(private route: ActivatedRoute, private cta: CtaService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.loadCoin(this.id, 'USD');
  }

  loadCoin(id: string, convert: string) {
    this.cta.getCoin(id, convert)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.map = response;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
