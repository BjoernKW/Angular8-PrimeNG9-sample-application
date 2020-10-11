import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Product } from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  get(): Observable<Product[]> {
    return of([
      { name: 'Product 1', description: 'Description 1'},
      { name: 'Product 2', description: 'Description 2'},
    ]);
  }
}
