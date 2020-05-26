import { Component, EventEmitter, ViewChild, AfterViewInit, NgZone, Input, OnChanges, Output } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartConfiguration } from 'chart.js';
export interface LibChart extends Chart {
  setData: (data: number[][] | number[], label?: any[]) => void;
  addPoint: (data: number, label: any) => void;
  removeData: () => void;
}

@Component({
  selector: 'lib-ng9-chartjs',
  template: `
  <div>
    <canvas #ref style="display:block"></canvas>
    </div>
  `,
  styles: [
  ]
})
export class Ng9ChartjsComponent implements AfterViewInit, OnChanges {
  public myChart: LibChart;
  @Input() data: Chart.ChartData;
  @Input() options: Chart.ChartOptions;
  @Input() type: Chart.ChartType | string;
  @Input() plugins: Chart.PluginServiceRegistrationOptions[];

  @Input() configuration: ChartConfiguration;

  @Output() chartIntance = new EventEmitter<LibChart>();
  public i = 0;

  @ViewChild('ref') ChartElement: any;

  constructor(private zone: NgZone) { }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (!this.myChart && !!this.ChartElement) {
      this.drawChart();
    } else {
      if (this.myChart)
        this.drawChart();
    }
  }
  ngAfterViewInit(): void {
    // only call once in ngZone
    this.drawChart();

  }
  private drawChart() {
    this.zone.runOutsideAngular(() => {
      if (typeof this.configuration != 'undefined') {
        this.myChart = new Chart(this.ChartElement.nativeElement, this.configuration) as LibChart;
      } else {
        this.myChart = new Chart(this.ChartElement.nativeElement, {
          type: this.type,
          options: this.options,
          data: this.data,
          plugins: this.plugins
        }) as LibChart;
      }
      this.myChart.addPoint = (data: number, label: any) => {
        this.myChart.data.labels.push(label);
        this.myChart.data.datasets.forEach(dataset => {
          dataset.data.push(data);
        });
        this.myChart.update();
      }
      this.myChart.setData = (data: number[][], labels?: any[]) => {
        this.myChart.data.labels = labels;
        if (Array.isArray(data) && Array.isArray(data[0]))
          this.myChart.data.datasets.forEach((dataset, index) => {
            dataset.data = data[index];
          });
        else {
          this.myChart.data.datasets.forEach((dataset, index) => {
            dataset.data = data;
          });
        }
        this.myChart.update();
      }
      this.myChart.removeData = () => {
        this.myChart.data.labels.pop();
        this.myChart.data.datasets.forEach(dataset => {
          dataset.data.pop();
        });
        this.myChart.update();
      }
      this.chartIntance.emit(this.myChart);
    });
  }

}
