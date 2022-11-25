import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError, pipe } from 'rxjs';
import { IProduct } from '../models/product';




@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _jsonURL = 'assets/data.json'
products:IProduct[];
favorate :IProduct[];
  constructor(private http :HttpClient) {
    this.products=[];
    this.favorate=[];

  }
  getProducts(): Observable<IProduct[]> { return this.http.get<IProduct[]>(this._jsonURL)}

  getFavorite(){
    return this.favorate;
  }

  addToFavorateList(product:IProduct){
let exist=this.favorate.findIndex(x =>x.id === product.id);
if(exist === -1){
  this.favorate.push(product);
}else{
  this.favorate[exist].count+=product.count;
}

    return this.favorate;
  }
  clearFavorate(){
    this.favorate=[];
    return this.favorate
      }

      // findProductById(id : number) :IProduct | null{
      //   let findAnimal=this.getProducts().find(a=> a.id === id);
      //   return findAnimal?findAnimal :null;
      //    }

         getProductById(id: number): Observable<IProduct | undefined> {
          return this.getProducts().pipe(map(items => items.find(item => item.id === id)));
        }
removeProduct(product : IProduct){
  this.favorate.forEach((element,index)=>{
    if(element==product)  this.favorate.splice(index,1);
 });
}
 addCount(count :number ,product :IProduct){
  let add=this.favorate.findIndex(x=>x.id ===product.id);
  this.favorate[add].count=count;
return this.favorate;
 }


}

