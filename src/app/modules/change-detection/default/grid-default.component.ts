import { Component, Input, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { IGrid } from '../interfaces/models';
@Component({
  selector: 'app-grid-default',
  templateUrl: './grid-default.component.html',
  styleUrls: ['./grid-default.component.scss'],

  encapsulation: ViewEncapsulation.None,
})
export class GridDefaultComponent implements OnInit {
  @Input() data: IGrid;
  constructor() { }

  ngOnInit() {
  }

}
