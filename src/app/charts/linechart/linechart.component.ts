import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent {
  ngOnInit(): void {
    const labels = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'June'];
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };
    new Chart(
      "linechart",
      {
        type: 'line',
        data: data
      }
    );
  }
}
