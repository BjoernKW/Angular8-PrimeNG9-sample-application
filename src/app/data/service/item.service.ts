import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Product } from "../model/product";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() {
  }

  get(searchQuery?): Observable<Product[]> {
    return of([
      {name: 'Some product', description: 'A product description.'},
      {name: 'Another product', description: 'Something else entirely.'},
    ])
      .pipe(
        map(products => products
          .filter(product => !searchQuery || product.name.toLowerCase().includes(searchQuery.toLowerCase())))
      );
  }
}
