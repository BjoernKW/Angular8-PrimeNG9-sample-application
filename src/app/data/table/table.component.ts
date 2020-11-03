import { Component, OnInit } from '@angular/core';
import { ItemService } from '../service/item.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  products: Product[];

  constructor(private _productService: ItemService) {
  }

  ngOnInit() {
    this._productService
      .get()
      .subscribe(products => this.products = products);
  }
}
