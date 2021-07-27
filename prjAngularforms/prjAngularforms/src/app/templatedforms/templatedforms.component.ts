import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { customer } from '../Model/customer';

@Component({
  selector: 'app-templatedforms',
  templateUrl: './templatedforms.component.html',
  styleUrls: ['./templatedforms.component.css']
})
export class TemplatedformsComponent implements OnInit {

  constructor() { }
  cust:customer={};

  ngOnInit(): void {
  }
  onRegister(cformdata:NgForm)
  {
    //ngform data
    console.log(cformdata.value);
    //object
    console.log(this.cust);
  }

}
