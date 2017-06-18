import { Component, OnInit } from '@angular/core';

declare var UIkit: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // lineChart
  public lineChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40, 110, 90, 89, 91, 70], label: 'Activities'},
    {data: [28, 48, 40, 19, 86, 27, 90, 101, 92, 90, 93, 80], label: 'Productions'},
    {data: [18, 48, 77, 9, 100, 27, 40, 103, 70, 81, 89, 80], label: 'Projects'}
  ];
  public lineChartLabels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  public lineChartOptions = {
    responsive: true
  };
  public lineChartColors = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  public randomize() {
    const _lineChartData = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e) {
    console.log(e);
  }

  public chartHovered(e) {
    console.log(e);
  }

  constructor() { }

  ngOnInit() {
    UIkit.notification({
      message: 'Welcome to your dashboard!',
      status: 'primary',
      pos: 'bottom-center',
      timeout: 5000
    });
  }
}
