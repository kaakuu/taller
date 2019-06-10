import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTabsModule } from 'ng-zorro-antd';

import { ChangeDetectionRoutingModule } from './change-detection-routing.module';
import { OnpushComponent } from './onpush/onpush.component';
import { DefaultComponent } from './default/default.component';
import { GridComponent } from './onpush/grid.component';
import { LlamadorComponent } from './onpush/llamador';
import { CellDataService } from './services/celldataservice';
import { MainComponent } from './main/main.component';
import { CallerComponent } from './default/caller';
import { GridDefaultComponent } from './default/grid-default.component';

@NgModule({
  declarations: [OnpushComponent, DefaultComponent, GridComponent, LlamadorComponent, MainComponent, CallerComponent, GridDefaultComponent],
  imports: [
    CommonModule,
    ChangeDetectionRoutingModule,
    NzTabsModule
  ],
  providers: [CellDataService]
})
export class ChangeDetectionModule { }
