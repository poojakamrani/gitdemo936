import { Injectable } from "@angular/core";
import { product } from "./model/product";
//decorator
@Injectable()
export class ProductService
{
  product: product[];
  constructor()
  {
    this.product=[
        {pid:11,pname:'ball',price:10,quantity:10,image:'assets/images/ball.jpg',desc:'10 % discount'},
        {pid:12,pname:'Doll',price:10,quantity:10,image:'assets/images/Doll.jpg',desc:'50 % discount'}
    ];
  }
  //fetch all product info
  getproducts()
  {
      return this.product;
  }
  //fetch the particular product details by passing pid
  getproductinfo(prodid:any)
  {
      let pinfo;//we use let to declare vaiables in angular
      this.product.forEach(ele=>{
          if(ele.pid==prodid)
          {
              pinfo=ele;
          }
      });
      return pinfo;
  }
}