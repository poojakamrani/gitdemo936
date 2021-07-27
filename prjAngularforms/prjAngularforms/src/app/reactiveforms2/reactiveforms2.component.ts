import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms2',
  templateUrl: './reactiveforms2.component.html',
  styleUrls: ['./reactiveforms2.component.css']
})
export class Reactiveforms2Component implements OnInit {
  city:any=['A','B']
  form: FormGroup;

  

  constructor() { 
    this.form=new FormGroup(
      {
        name:new FormControl(null),
        mailid:new FormControl(null),
        pwd:new FormControl(null),
        cpwd:new FormControl(null),
        phno:new FormControl(null),
        gender:new FormControl(null),
        city:new FormControl(null)
      }
    );
    
  }

  ngOnInit(): void {
  }

}
