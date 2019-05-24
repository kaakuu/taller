import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { TableRoutingModule } from './tables-routing.module';
import { NzTableModule } from 'ng-zorro-antd';
import { NzButtonModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    NzTableModule,
    NzButtonModule
  ]
})
export class TablesDataModule { }
