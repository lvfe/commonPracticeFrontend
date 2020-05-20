import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import exportingInit from 'highcharts/modules/exporting';
import treemap from 'highcharts/modules/treemap';
exportingInit(Highcharts)
treemap(Highcharts);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'highchartlib';
  LineHighcharts: typeof Highcharts = Highcharts;
  linechartOptions: Highcharts.Options = {
    series: [{
      data: [1, 2, 3],
      type: 'line'
    }]
  };

  ColumnHighcharts: typeof Highcharts = Highcharts;
  columnchartOptions: Highcharts.Options = {
    series: [{
      data: [5, 3, 4, 7, 2],
      type: 'column'
    }]
  };

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
}
