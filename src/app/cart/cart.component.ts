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
  calc( count: string,prd :IProduct): void {
    this.total=0
    this.productService.addCount(Number(count),prd);
     this.fav.forEach(f =>{
       this.total+= f.count *f.price
     })
     console.log(`total ${this.total}`)
  }
  removeProduct(product :IProduct) : void{
this.productService.removeProduct(product);
window.alert(`you have been remove ${product.name} from your cart `);
this.total-=product.price*product.count
  }
}
