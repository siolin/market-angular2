import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';

// import './rxjs-operators';

@Component({
  selector: 'list',
  template: require('./list.html'),
  providers: [ProductService]
})

export class ListComponent {
  products: Object;

  constructor(private productService: ProductService) {

  }

  getProducts() {
    this.productService.getProducts()
      .subscribe((product: Object) => {
        this.products = product;
    });
  }

  ngOnInit(): void{
    this.getProducts();
  }
}
