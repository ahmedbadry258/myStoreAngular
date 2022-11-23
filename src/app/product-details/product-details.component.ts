import { Location } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './../models/product';
import { ProductsService } from './../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',

})
export class ProductDetailsComponent implements OnInit {
  zid:number=0;
product:IProduct |undefined;
countNumber:number =0;
totalPriceForProduct :number=0
@Output() addToFavorate=new EventEmitter();
  constructor(private activatedRoute: ActivatedRoute
    ,private router :Router
    , private  productsService:ProductsService
    ,private location :Location) { }

  ngOnInit(): void {
   this.zid=Number( this.activatedRoute.snapshot.paramMap.get('id'));
   //this.animal=this.zooService.findAnimalById(this.zid);
   this.activatedRoute.paramMap.subscribe((paramMap) =>{
    this.zid=Number(paramMap.get("id"));
    //this.product=this.productsService.findProductById(this.zid);
    this.productsService.getProductById(this.zid).subscribe(x =>{
      this.product=x;
console.log(x);
    });
    console.log(`name product ${this.product?.name}`)
   })
  }
goBack(){
  this.router.navigate(['/products']);
}

addToCart(product :IProduct):void{
  window.alert(`add To Favorate List Book ${this.product?.name}  `);
  this.product!.count=this.countNumber;
  this.productsService.addToFavorateList(product);


}

calc(price: number, count: string,prd :IProduct): void {
  this.countNumber =Number(count);
  console.log(this.countNumber)
  console.log(count)
  prd.count=this.countNumber;
  this.product!.count=this.countNumber;
  this.totalPriceForProduct += price * +count;
  // this.totalPriceChanged.emit(this.total);
  // this.transferPrd.emit(prd);
  // this.numOfQty.emit(+count );
}


}
