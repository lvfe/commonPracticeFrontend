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
  
  constructor() {

  }
  ngOnInit() {
  }

  ngOnDestroy() {
  }
}