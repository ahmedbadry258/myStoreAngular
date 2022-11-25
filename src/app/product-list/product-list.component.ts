import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { IProduct } from '../models/product';




@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',

})
export class ProductListComponent implements OnInit {
 productList:IProduct[]=[];
 
 @Output() addToFavorate=new EventEmitter();
psList :any=[]
  constructor(private productsService : ProductsService) {

  }

  ngOnInit(): void {
   //this.productList= this.productsService.getProducts()
   this.productsService.getProducts().subscribe(res=>{this.productList=res})

}
onAddToFavorate(product :IProduct):void{
  console.log(`count  ${product.count}`);
  window.alert(`add To Cart  ${product.name}  `);
  console.log('Length is :',this.productsService.addToFavorateList(product).length);
  this.productsService.getFavorite().forEach(p =>{
    console.log(`product name ${p.name}`)
    console.log(`product price ${p.price}`)
    console.log(`product count ${p.count}`)
  })
}


}
