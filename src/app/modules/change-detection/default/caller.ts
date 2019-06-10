import { Component, ChangeDetectionStrategy } from '@angular/core';

import { IGrid, ICell } from '../interfaces/models';

import { CellDataService } from '../services/celldataservice';

@Component({
  selector: 'my-app-default',
  template: `<app-grid-default [data]=grid class="grid"></app-grid-default>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class CallerComponent { 
  name = 'Angular 123'; 
  private grid: IGrid;
  
  constructor(cellDataService: CellDataService) {
    this.grid =  cellDataService.getGridState();
    // console.log("app - grid", this.grid.cells);
  }
}