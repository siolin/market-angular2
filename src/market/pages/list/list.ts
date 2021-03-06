import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'list-product',
  template: require('./list.html'),
  providers: [ ProductService ]
})

export class ListComponent {
  products: Object;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe((product: Object) => {
        this.products = product;
    });
  }
}
