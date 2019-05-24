import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';


import { NzStatisticModule } from 'ng-zorro-antd';
import { NzCardModule } from 'ng-zorro-antd';
import { NzGridModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    
    CommonModule,
    NzStatisticModule,
    NzGridModule,
    HomeRoutingModule,
    NzCardModule
  ]
})
export class HomeModule { }
