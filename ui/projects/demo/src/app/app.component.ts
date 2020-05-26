import { Component, AfterViewInit } from '@angular/core';
import { LibChart } from 'projects/ng9-chartjs/src/lib/ng9-chartjs.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  constructor(private http: HttpClient){
    this.http.get('http://localhost:5000/').subscribe(res=>{console.log(res)});
  }
  ngAfterViewInit(): void {
    setTimeout(()=>{
      let labels = ['yellow'];
      // this.chInstance.setData([3], labels);
      this.chInstance.removeData();
    }, 3000);
  }
  title = 'demo';
  chInstance: LibChart;
  type = 'bar';
  data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  }
  options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
  getChart($event) {
    console.log(123);
    this.chInstance = $event;
    
  }

}
