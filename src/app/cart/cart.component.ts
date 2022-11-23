import { Component, OnInit } from '@angular/core';

import { IProduct } from './../models/product';
import { ProductsService } from './../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',

})
export class CartComponent implements OnInit {
fav:IProduct[]=[];
total: number = 0;
  constructor(private productService :ProductsService) { }

  ngOnInit(): void {
this.fav=this.productService.getFavorite();
this.fav.forEach(f =>{
  this.total+= f.count *f.price
})
  }
  calc(price: number, count: string,prd :IProduct): void {
    this.total += price * +count;
    // this.fav.forEach(f =>{
    //   this.total+= f.count *f.price
    // })
    // console.log(`total ${this.total}`)
  }
}
