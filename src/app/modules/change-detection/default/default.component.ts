import { Component, 
  Input, 
  OnInit, 
  AfterViewChecked, 
  ViewEncapsulation, 
  NgZone, 
  ElementRef, 
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  DoCheck, 
  OnChanges,
  SimpleChanges} from '@angular/core';
  
  import { ICell, ViewState } from '../interfaces/models';
  
  import {CellDataService} from '../services/celldataservice';
  
  @Component({
    selector: 'app-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss'],
    encapsulation: ViewEncapsulation.None
  })
  
  export class DefaultComponent implements OnInit, AfterViewChecked  {
    @Input() data: ICell;
    
    constructor(
      private cellDataService: CellDataService,
      private zone: NgZone,
      private el:ElementRef,
      private ref: ChangeDetectorRef) { }
  
    ngOnInit(): void {
      console.log("init");
    }
    
    
    ngAfterViewChecked() {
      const elem = this.el.nativeElement.querySelectorAll("div.flipper")[0];
      if (!elem) { return; }
      
      // Trigger a highlight for visualization
      const highlightCSS = 'changed';
      elem.classList.add(highlightCSS);
      this.zone.runOutsideAngular(() => {
          setTimeout(() => {
            elem.classList.remove(highlightCSS);
          }, 500);
      });
      
    }
    
    
    onClick(): void {
      console.log("onclick");
      this.cellDataService.flipCell2(this.data.id);
     }
  }
  

