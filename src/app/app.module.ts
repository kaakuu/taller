import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, registerLocaleData } from '@angular/common';
import { NZ_I18N, es_ES } from 'ng-zorro-antd';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import es from '@angular/common/locales/es';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
  ],  
  imports: [
    CommonModule,
     AppRoutingModule,
    BrowserModule,
  FormsModule,
  HttpClientModule,
  BrowserAnimationsModule,
  ],
  providers   : [
    { provide: NZ_I18N, useValue: es_ES }
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
}) 
export class AppModule { }
