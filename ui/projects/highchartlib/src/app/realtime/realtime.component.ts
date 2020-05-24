import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import exportingInit from 'highcharts/modules/exporting';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-realtime',
  templateUrl: './realtime.component.html',
  styleUrls: ['./realtime.component.scss']
})
export class RealtimeComponent implements OnInit, AfterViewInit, OnDestroy {

  public message;
  public messages = [];
  public connection;
  chartInstance;
  LineHighcharts: typeof Highcharts = Highcharts;
  linechartOptions: Highcharts.Options = {
    series: [{
      data: [],
      type: 'spline'
    }],
    title: {
      text: "dynamic data"
    },
    tooltip: {
      formatter: function () {
        return '<b>' + 'Count' + '</b><br/>' +
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
      marginRight: 10
    }
  };
  constructor(public chatService: ChatService) { }
  ngAfterViewInit(): void {
    this.reset();
  }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe((message:string) => {
      let msg = JSON.parse(message);
      let x = msg.time;
      let y = msg.count;
      this.chartInstance.series[0].addPoint([x, y], true, true);
    })
  }
  chartInstan($event){
    this.chartInstance = $event;
  }

  restart() {
    let data = this.chartInstance.series[0].data;
    this.chartInstance.series[0].setData();
    this.chatService.sendMessage('chat', this.message);
    this.reset();
  }
  startValue: Date | null = null;

  onStartChange(date: Date): void {
    this.startValue = date;
  }

  handleStartOpenChange(open: boolean): void {
    if (this.startValue != null)
      console.log(this.startValue.getTime());
  }
  private reset(){
      var data = [];
      var time = (new Date()).getTime();
      for (let i = -19; i < -0; i += 1) {
        data.push({
          x: time + i * 3000,
          y: 0
        });
      }
      this.chartInstance.series[0].setData(data);
  }
  ngOnDestroy(): void {
    this.connection.unsubscribe();
  }
}
