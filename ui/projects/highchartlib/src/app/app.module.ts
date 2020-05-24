import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';

import { AppComponent } from './app.component';
import { ChatService } from './chat.service';
import { RealtimeComponent } from './realtime/realtime.component';
import { GaugeComponent } from './gauge/gauge.component';
import { OverviewComponent } from './overview/overview.component';
import { KafkaBarchartComponent } from './kafka-barchart/kafka-barchart.component';
import { NgZorroAntdModule, NZ_I18N, en_US, NzDatePickerModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { NgxGaugeModule } from 'ngx-gauge';
import en from '@angular/common/locales/en';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    RealtimeComponent,
    GaugeComponent,
    OverviewComponent,
    KafkaBarchartComponent
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    NzDatePickerModule,
    BrowserAnimationsModule, 
    NgxGaugeModule,
  ],
  providers: [ChatService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
