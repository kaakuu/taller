import { Component, ChangeDetectionStrategy } from '@angular/core';

import { IGrid, ICell } from '../interfaces/models';

import { CellDataService } from '../services/celldataservice';

@Component({
  selector: 'my-app',
  template: `<app-grid [data]=grid class="grid"></app-grid>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class LlamadorComponent { 
  name = 'Angular 123'; 
  public grid: IGrid;
  
  constructor(cellDataService: CellDataService) {
    this.grid =  cellDataService.getGridState();
    // console.log("app - grid", this.grid.cells);
  }
}