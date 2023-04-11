import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarchartComponent } from './charts/barchart/barchart.component';
import { BubblechartComponent } from './charts/bubblechart/bubblechart.component';
import { DoughnutchartComponent } from './charts/doughnutchart/doughnutchart.component';
import { LinechartComponent } from './charts/linechart/linechart.component';
import { MixedchartComponent } from './charts/mixedchart/mixedchart.component';
import { PiechartComponent } from './charts/piechart/piechart.component';
import { PolarareachartComponent } from './charts/polarareachart/polarareachart.component';
import { RadarchartComponent } from './charts/radarchart/radarchart.component';
import { ScatterchartComponent } from './charts/scatterchart/scatterchart.component';
import { ModalComponent } from './modal/modal.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    BarchartComponent,
    BubblechartComponent,
    DoughnutchartComponent,
    LinechartComponent,
    MixedchartComponent,
    PiechartComponent,
    PolarareachartComponent,
    RadarchartComponent,
    ScatterchartComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
