import { Component, OnInit } from '@angular/core';
//1 form control and group
//import { FormControl, FormGroup, Validators,Validator } from '@angular/forms';

//2 form builder
import { AbstractControl,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms1',
  templateUrl: './reactiveforms1.component.html',
  styleUrls: ['./reactiveforms1.component.css']
})
export class Reactiveforms1Component implements OnInit {
  [x: string]: any;
  //to represent form group elements

  // 1
  //loginform: FormGroup;
  //2
  loginform;

  //1:constructor() 
  //2
  constructor(private fb:FormBuilder)
  {
    //1
    /*this.loginform=new FormGroup(
      {
mailid:new FormControl(null,[Validators.required,Validators.email]),
pwd:new FormControl(null,Validators.required)
      }
    );*/

    //2
    this.loginform=this.fb.group({
      mailid:['',[Validators.required,Validators.email]],
      pwd:['',[Validators.required]],
      age:['',[this.ageRangeValidator]]
    })


   }

  ngOnInit(): void {
  }
  //custom validation
  ageRangeValidator(control:AbstractControl):
  {[key:string]:boolean} | null
  {
   if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 45))
   {
     return {'ageRange':true};
   }
   return null;
  }

}
