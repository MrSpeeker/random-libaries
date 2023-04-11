import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'bubblechart',
  templateUrl: './bubblechart.component.html',
  styleUrls: ['./bubblechart.component.css']
})
export class BubblechartComponent {
  ngOnInit(): void {
    const data = {
      datasets: [{
        label: 'First Dataset',
        data: [{
          x: 20,
          y: 30,
          r: 15
        }, {
          x: 40,
          y: 10,
          r: 10
        }],
        backgroundColor: 'rgb(255, 99, 132)'
      }]
    };

    new Chart(
      "bubblechart",
      {
        type: 'bubble',
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
