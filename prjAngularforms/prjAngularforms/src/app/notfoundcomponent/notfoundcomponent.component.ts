import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfoundcomponent',
  template: '<h1>Page not found</h1>',
  //normal
  // styleUrls: ['./notfoundcomponent.component.css']
  // to add style
  styles:['h1{color:#FF4500}','p{font-size:30px}']
})
export class NotfoundcomponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
