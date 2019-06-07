import { Component, OnInit } from '@angular/core';
import { distanceInWords } from 'date-fns';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass']
})
export class FeedComponent implements OnInit {
  loading = true;
  items = Array(2).fill(2);
  submitting = false;
  user = {
    author: 'Test angular',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN3FWz3xtkRNFOk3JoeXAy5YjGudAxoy_nbLQlkUqKhOGdH3CpyA'
  };
  inputValue = '';
  data: any[] = [{
    ...this.user,
    content: 'Esto es un test de skeletons',
    datetime: new Date(),
    displayTime: distanceInWords(new Date(), new Date())
  },{
    ...this.user,
    content: 'Esto es un test de skeletons2',
    datetime: new Date(),
    displayTime: distanceInWords(new Date(), new Date())
  }];
  constructor() { }

  ngOnInit() {
    console.log('Load')

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  handleSubmit(): void {
    this.submitting = true;
    const content = this.inputValue;
    this.inputValue = '';
    setTimeout(() => {
      this.submitting = false;
      this.data = [
        ...this.data,
        {
          ...this.user,
          content,
          datetime: new Date(),
          displayTime: distanceInWords(new Date(), new Date())
        }
      ].map(e => {
        return {
          ...e,
          displayTime: distanceInWords(new Date(), e.datetime)
        };
      });
    }, 300);
  } 
}
