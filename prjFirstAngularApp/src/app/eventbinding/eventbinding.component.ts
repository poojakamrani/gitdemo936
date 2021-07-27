import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


//Eg1
welcomeMsg()
{
  debugger;
  alert("good morning");
}
//Eg2
fname:any;
displayfullName(name:HTMLInputElement)
{
  debugger;
  this.fname=name.value+"Kumar";
}
//Eg3
calbonus:any;
displayBonus(sal:HTMLInputElement)
{
  this.calbonus=parseInt(sal.value)+1000;
}
}