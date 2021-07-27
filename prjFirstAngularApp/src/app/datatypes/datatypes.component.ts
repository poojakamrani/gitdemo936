import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatypes',
  templateUrl: './datatypes.component.html',
  styleUrls: ['./datatypes.component.css']
})
export class DatatypesComponent implements OnInit {
  //declaring variable
  name:string="SRI";
  age:number;
  hobbies:string[];
    marks:Array<number>;
    Istrue:boolean;
    tupleval:[string,number,boolean];
    dynamicvalue:any;
    student:any;
    picture="assets/images/Doll.jpg"

    constructor(){
      this.age=30;
      this.hobbies=["Playing"];
      this.marks=[90,60];
      this.Istrue=false;
      this.tupleval=["pune",1200,true];
      this.dynamicvalue=79;
      this.student={Fathername:"Raj",address:"Tnbb"}
    }

  

  ngOnInit()
  {
  }

}
