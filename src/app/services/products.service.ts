import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
  // public getProducts() {
  //   return [
  //     {
  //       id: 1,
  //       name: "Book",
  //       price: 9.99,
  //       url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //       description: "You can read it!",
  //       count:0
  //     },
  //     {
  //       id: 2,
  //       name: "Headphones",
  //       price: 249.99,
  //       url: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //       description: "Listen to stuff!",
  //       count:0
  //     },
  //     {
  //       id: 3,
  //       name: "Backpack",
  //       price: 79.99,
  //       url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //       description: "Carry things around town!",
  //       count:0
  //     },
  //     {
  //       id: 4,
  //       name: "Glasses",
  //       price: 129.99,
  //       url: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //       description: "Now you can see!",
  //       count:0
  //     },
  //     {
  //       id: 5,
  //       name: "Cup",
  //       price: 4.99,
  //       url: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //       description: "Drink anything with it!",
  //       count:0
  //     },
  //     {
  //       id: 6,
  //       name: "Shirt",
  //       price: 29.99,
  //       url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
  //       description: "Wear it with style!",
  //       count:0
  //     }
  //   ]
  //   ;
  // }
  getFavorite(){
    return this.favorate;
  }

  addToFavorateList(product:IProduct){

    this.favorate.push(product);
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


}