import { Component, OnInit } from '@angular/core';
import { ProductService } from '../ProductService';
import {product} from '../model/product';

@Component({
  selector: 'app-displayproduct',
  templateUrl: './displayproduct.component.html',
  styleUrls: ['./displayproduct.component.css']
})
export class DisplayproductComponent implements OnInit {

  //injecting the service

  constructor(private pservice:ProductService) { }

  pro?: product[];


  ngOnInit(): void {
    this.displayProductDetails();
  }
  displayProductDetails()
  {
    this.pro=this.pservice.getproducts();
  }

}
