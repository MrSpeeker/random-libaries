import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'mixedchart',
  templateUrl: './mixedchart.component.html',
  styleUrls: ['./mixedchart.component.css']
})
export class MixedchartComponent {
  ngOnInit(): void {
    new Chart(
      "mixedchart",
      {
        data: {
          datasets: [{
            type: 'bar',
            label: 'Bar Dataset',
            data: [50, 30, 40, 10]
          }, {
            type: 'line',
            label: 'Line Dataset',
            data: [50, 30, 40, 10],
          }],
          labels: ['January', 'February', 'March', 'April']
        },
        options: {}
      }
    );
  }
}
