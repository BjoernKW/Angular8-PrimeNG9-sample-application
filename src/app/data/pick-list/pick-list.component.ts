import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html',
  styleUrls: ['./pick-list.component.scss']
})
export class PickListComponent implements OnInit {

  sourceProducts: Product[];
  targetProducts: Product[];

  constructor(private _productService: ProductService) {
  }

  ngOnInit() {
    this._productService.getProductsSmall().then(products => this.sourceProducts = products);
    this.targetProducts = [];
  }
}
