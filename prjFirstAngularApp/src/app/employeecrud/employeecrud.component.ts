import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';//importing that class(export likha waha isliye) employee from model employee.ts jo humne alag se bnaya 

@Component({
  selector: 'app-employeecrud',
  templateUrl: './employeecrud.component.html',
  styleUrls: ['./employeecrud.component.css']
})
export class EmployeecrudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //first step:making array
  //can use emp:any[]=[] array below
  emp:Employee[]=[
    {eid:1001,ename:"Sri",gender:"male",salary:30000},
    {eid:1002,ename:"Raj",gender:"male",salary:35000},
    {eid:1003,ename:"Bhanu",gender:"female",salary:20000},
    {eid:1004,ename:"Jamuna",gender:"female",salary:45000},

  ];
  //object creation of type any
  //getempinfo:any={};
  getempinfo:Employee={};

  //Adding Employee details into emp array(temproray add hoga refresh ke badd ghum hojaega)
  addEmployee()
  {
    //debugger acts like breakpoint inspect karke dekhege toh flow dilhta hai
    debugger;
    this.emp.push(this.getempinfo);
    this.getempinfo={};//Emptying the object
  }

  //deleting employee info from array by passing eid
  msg:any;
  deleteEmployee(empid?:number)
  {
    debugger;
    for(let i=0;i<this.emp.length;i++)//iterate through array
    {
      if(this.emp[i].eid==empid)//particular emp id exists
      {
        this.emp.splice(i,1);//inbuilt array method to remove particulat record at a time
        this.msg="Record deleted";
      }
      else{
        this.msg="record not found";
      }
    }
  }
  //edit button jo update karne ke  kaam ayega
  employeeid:any;
  EditEmployee(empid?:number)
  {
    for(let i=0;i<this.emp.length;i++)//iterate through array
    {
      if(this.emp[i].eid==empid)//particular emp id exists
      {
        this.getempinfo=this.emp[i];
        
      }
  }

  }
  //update the edited emp info
  updateEmployee()
  {
    let k=this.getempinfo.eid;
    for(let i=0;i<this.emp.length;i++)//iterate through array
    {
      if(this.emp[i].eid==k)//particular emp id exists
      {
        this.emp[i]=this.getempinfo;
        this.getempinfo={};
        this.msg="Record updated";
      }
  }
}
}
