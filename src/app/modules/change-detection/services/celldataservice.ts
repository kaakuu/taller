//import { Hero } from './hero';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { IGrid, ICell } from '../interfaces/models';

@Injectable()
export class CellDataService {

  readonly TOTAL: number = 500;
  
  private currentState: any;
   
  constructor() {
    this.currentState = {
      cells:_.range(this.TOTAL).map(n => {
        return <any> {
          id: n,
          flip: false,
          text: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"[Math.floor(Math.random() * 36)],
          changed: false
        };
      })
    };
    console.log(this.currentState);
  }
  
  getGridState(): IGrid {
    return this.currentState;
  }
  
  flipCell(id): void {
    console.log(id);
    let index: number = _.findIndex(this.currentState.cells, c => c.id === id);
    let updatedCell = Object.assign({}, this.currentState.cells[index], {
      flip: !this.currentState.cells[index].flip
    });
    
    this.currentState.cells = [
      ...this.currentState.cells.slice(0, index),
      updatedCell,
      ...this.currentState.cells.slice(index + 1)
      ];
      
    // To trigger the 'changed' visualization
    _.each(this.currentState.cells, c => { c.changed = true; })
  }

  flipCell2(id): void {
    let matchedCell: any = _.find(this.currentState.cells, c => c.id === id);
    if (matchedCell) { 
      matchedCell.flip = !matchedCell.flip; 
    }
  }
  
  resetChanged(): void {
    // To reset the 'changed' visualization
    _.each(this.currentState.cells, c => { c.changed = false; })
  }
  
  addCells(count: number): any {
    
  }
  
  removeCells(count: number): any {
    
  }
}



/*
export interface IGrid {
  cells: Cell[];
  rows: number;
  columns: number;
}

// Angular CLI had a bug which prevents to export multiple interfaces
// using class
export class ICell {
  id: number;
  width: number;
  height: number;
  flipped: boolean;
}

*/