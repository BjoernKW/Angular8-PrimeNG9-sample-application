import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../data/service/product.service';
import { Product } from '../../data/model/product';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {

  searchQuery: string;
  results: Product[];

  constructor(
    private _productService: ProductService
  ) { }

  search(event) {
    this._productService
      .get(event.query)
      .subscribe(products => {
        this.results = products;
      });
  }
  ngOnInit() {
  }

}
