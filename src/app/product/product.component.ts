import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',

})
export class ProductComponent implements OnInit {
  @Input() product :IProduct;
counter:number[];
totalPriceForProduct: number=0;
countNumber:number =0;
  @Output() addToFavorate=new EventEmitter();
    constructor() {
      this.product={
        id:0,
        name:"",
        price:0,
        url:"",
        description:'',
        count:0
      }
      this.counter=[1,2,3,4,5]

     }
  ngOnInit(): void {
    this.product.count=1;
  }

  calc(price: number, count: string,prd :IProduct): void {
    this.countNumber =Number(count);
    console.log(this.countNumber)
    console.log(count)
    prd.count=this.countNumber;
    this.product.count=this.countNumber;
    this.totalPriceForProduct += price * +count;
    // this.totalPriceChanged.emit(this.total);
    // this.transferPrd.emit(prd);
    // this.numOfQty.emit(+count );
  }

}
