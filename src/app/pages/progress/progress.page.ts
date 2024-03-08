import { Component, OnInit } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
  porcentaje: number = 0.05;

  constructor() { }

  ngOnInit() {
  }

  rangeChange( ev: Event ) {
     console.log((ev as RangeCustomEvent).detail.value); // 1 - 100

    //this.porcentaje =(ev as RangeCustomEvent).detail.value;
  }

}
