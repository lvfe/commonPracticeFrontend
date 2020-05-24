import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import exportingInit from 'highcharts/modules/exporting';

@Component({
  selector: 'app-realtime',
  templateUrl: './realtime.component.html',
  styleUrls: ['./realtime.component.scss']
})
export class RealtimeComponent implements OnInit {

  LineHighcharts: typeof Highcharts = Highcharts;
  linechartOptions: Highcharts.Options = {
    series: [{
      data: (function () {
        var data = [];
        var time = (new Date()).getTime();
        for (let i = -19; i < -0; i += 1) {
          data.push({
            x: time + i * 1000,
            y: 0
          });
        }

        return data;
      }()),
      type: 'spline'
    }],
    title: {
      text: "dynamic data"
    },
    tooltip: {
      formatter: function () {
        return '<b>' + this.series.name + '</b><br/>' +
          Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br>' +
          Highcharts.numberFormat(this.y, 2)
      }
    },
    legend: {
      enabled: false
    },
    xAxis: {
      type: 'datetime',
      tickPixelInterval: 150
    },
    yAxis: {
      title: {
        text: null
      }
    },
    chart: {
      marginRight: 10,
      events: {
        load: function () {
          var series = this.series[0];
          let chart = this;
          setInterval(function () {
            var x = (new Date()).getTime();
            var y = Math.random();
            series.addPoint([x, y], true, true);
          }, 3000);
        }
      }
    }
  };
  constructor() { }

  ngOnInit() {
  }

  startValue: Date | null = null;

  onStartChange(date: Date): void {
    this.startValue = date;
  }

  handleStartOpenChange(open: boolean): void {
   
    console.log('handleStartOpenChange', open);
    if(this.startValue!=null)
      console.log(this.startValue.getTime());
  }
}
