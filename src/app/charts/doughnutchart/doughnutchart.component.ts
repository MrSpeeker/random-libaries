import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'doughnutchart',
  templateUrl: './doughnutchart.component.html',
  styleUrls: ['./doughnutchart.component.css']
})
export class DoughnutchartComponent {
  ngOnInit(): void {
    const data = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };
    new Chart(
      "doughnutchart",
      {
        type: 'doughnut',
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      }
    );
  }
}
