import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }
  employee:any[]=[

    {"name":"Sini","age":"22","dept":"Hr"},
    {"name":"mini","age":"24","dept":"pr"},
    {"name":"Sinu","age":"22","dept":"Hr"},
    {"name":"ron","age":"26","dept":"admin"},
  ];

  ngOnInit() {
  }

}
