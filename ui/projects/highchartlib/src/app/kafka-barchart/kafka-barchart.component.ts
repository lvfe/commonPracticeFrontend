import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';
import exportingInit from 'highcharts/modules/exporting';


@Component({
  selector: 'app-kafka-barchart',
  templateUrl: './kafka-barchart.component.html',
  styleUrls: ['./kafka-barchart.component.scss']
})
export class KafkaBarchartComponent implements OnInit {
  ColumnHighcharts: typeof Highcharts = Highcharts;
  columnchartOptions: Highcharts.Options = {
    series: [{
      name: 'random',
      data: [5, 3, 4, 7, 2],
      type: 'column'
    }]
  };
  constructor() { }

  ngOnInit() {
  }

}
