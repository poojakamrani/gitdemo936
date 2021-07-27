import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome to learn pipes';
  todaydate?:Date;

  products?:any[];//array
  p:any={};//object

  searchtext?:any;
  ngOnInit()
  {
    this.todaydate=new Date();
    this.products=[
      {id:1,pname:"Pen",price:10},
      {id:2,pname:"paper",price:20},
      {id:3,pname:"note",price:50},
      {id:4,pname:"Bag",price:67},
      {id:5,pname:"ball",price:80}

    ];
  }
}
