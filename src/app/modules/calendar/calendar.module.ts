import { NgModule } from '@angular/core';
// import { CommonModule, DatePipe } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarRoutingModule } from './calendar-routing.module';
import { NzCalendarModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';

import { NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData, CommonModule } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
registerLocaleData(en);

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    // CommonModule,
    FormsModule,
    CalendarRoutingModule,
    NzCalendarModule,
  ],
  providers   : [ { provide: NZ_I18N, useValue: en_US } ]
})
export class CalendarModule { }
