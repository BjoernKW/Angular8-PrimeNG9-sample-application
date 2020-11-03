import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { SelectItem } from 'primeng';
import { Product } from '../model/product';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss']
})
export class DataViewComponent implements OnInit {

  products: Product[];
  sortOptions: SelectItem[];

  sortOrder: number;
  sortField: string;

  constructor(private _productService: ProductService) {
  }

  ngOnInit() {
    this._productService.getProducts().then(data => this.products = data);

    this.sortOptions = [
      {label: 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
    ];
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
}
