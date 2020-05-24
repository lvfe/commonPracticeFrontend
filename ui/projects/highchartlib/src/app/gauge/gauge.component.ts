import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import exportingInit from 'highcharts/modules/exporting';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements OnInit {
  BabelHighcharts: typeof Highcharts = Highcharts;
  babelchartOptions: Highcharts.Options = {
    series: [{
      type: 'treemap',
      layoutAlgorithm: 'squarified',
      data: [{
        name: 'A',
        value: 6,
        colorValue: 1
      }, {
        name: 'B',
        value: 6,
        colorValue: 2
      }, {
        name: 'C',
        value: 4,
        colorValue: 3
      }, {
        name: 'D',
        value: 3,
        colorValue: 4
      }, {
        name: 'E',
        value: 2,
        colorValue: 5
      }, {
        name: 'F',
        value: 2,
        colorValue: 6
      }, {
        name: 'G',
        value: 1,
        colorValue: 7
      }]
    }]
  };

  gaugeType = "semi";
  gaugeValue = 28.3;
  gaugeLabel = "Speed";
  gaugeAppendText = "km/hr";
  constructor() {
    console.log(123);

  }

  ngOnInit() {
  }

}
