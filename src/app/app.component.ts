import {Component, OnInit} from '@angular/core';
import {CtaService} from './service/cta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public cta: CtaService) {}

  ngOnInit() {
    this.cta.loader = false;
  }
}
