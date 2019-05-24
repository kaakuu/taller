import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit {
  selectedValue = new Date('2017-01-25');

  constructor() { }

  ngOnInit() {
  }


  selectChange(select: Date): void {
    console.log(`Select value: ${select}`);
  }

}
