import { Component, OnInit } from '@angular/core';
import { Department } from '../Model/department';

@Component({
  selector: 'app-departmentcrud',
  templateUrl: './departmentcrud.component.html',
  styleUrls: ['./departmentcrud.component.css']
})
export class DepartmentcrudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dept:Department[]=[
    {did:1001,dname:"Hr",dloc:"Mum"},
    {did:1002,dname:"Admin",dloc:"chennai"},
    {did:1003,dname:"Management",dloc:"hyderabad"}

  ];
  //object creation of type any
  //getempinfo:any={};
  getdeptinfo:Department={};

  //Adding Employee details into emp array(temproray add hoga refresh ke badd ghum hojaega)
  addDepartment()
  {
    //debugger acts like breakpoint inspect karke dekhege toh flow dilhta hai
    debugger;
    this.dept.push(this.getdeptinfo);
    this.getdeptinfo={};//Emptying the object
  }

  //deleting employee info from array by passing eid
  msg:any;
  deleteDepartment(did?:number)
  {
    debugger;
    for(let i=0;i<this.dept.length;i++)//iterate through array
    {
      if(this.dept[i].did==did)//particular emp id exists
      {
        this.dept.splice(i,1);//inbuilt array method to remove particulat record at a time
        this.msg="Record deleted";
      }
      else{
        this.msg="record not found";
      }
    }
  }
  //edit button jo update karne ke  kaam ayega
  departmentid:any;
  EditDepartment(deptid?:number)
  {
    for(let i=0;i<this.dept.length;i++)//iterate through array
    {
      if(this.dept[i].did==deptid)//particular emp id exists
      {
        this.getdeptinfo=this.dept[i];
        
      }
  }

  }
  //update the edited emp info
  updateDepartment()
  {
    let k=this.getdeptinfo.did;
    for(let i=0;i<this.dept.length;i++)//iterate through array
    {
      if(this.dept[i].did==k)//particular emp id exists
      {
        this.dept[i]=this.getdeptinfo;
        this.getdeptinfo={};
        this.msg="Record updated";
      }
  }
}

}
