import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../ProductService';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {
  [x: string]: any;

  constructor(private pser:ProductService,private route:ActivatedRoute) { }

  pid?:number;

  ngOnInit(): void {
    //getting id from url
   this.getSelectedProduct();
    }
    
  
  //calling getproductinfo from product service by passing product id
  selectedpro: any;
  getSelectedProduct()
  {
    this.selectedpro=this.pser.getproductinfo(this.route.snapshot.params.id);
  }


  }
