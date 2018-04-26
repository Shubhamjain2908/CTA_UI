import { Component, OnInit } from '@angular/core';
import {CtaService} from '../service/cta.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  coins = [];
  loader = true;

  constructor(private coinsService: CtaService) { }

  ngOnInit() {
    this.coinsService.loadCoins()
      .subscribe(
        (response: any) => {
          this.coins = response;
          this.loader = false;
          },
        (error) => console.log(error)
      );
  }

}
