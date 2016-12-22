import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

import {CommentService} from '../../services/comment.service';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'product-detail',
  template: require('./product.html'),
  providers: [CommentService, ProductService]
})

export class ProductComponent {
  id: number;
  comments: Array<any>;
  product: Object;
  newComment: Object;
  imageUrl: string = 'http://smktesting.herokuapp.com/static/';

  constructor(
    private router: ActivatedRoute,
    private commentService: CommentService,
    private productService: ProductService
  ) {}

  addComment(id, data) {
    this.commentService.addComment(id, data)
      .subscribe((data: any) => {
        if (data.success) {
          this.commentService.getComments(this.id)
            .subscribe((data: any) => {
              this.comments = data;
          });
        }
    });
  }

  onSubmitComment(f: NgForm, e: Event) {
    e.preventDefault();
    this.addComment(this.id, f.value);
  }

  ngOnInit() {
    this.id = +this.router.snapshot.params['id'];
    this.commentService.getComments(this.id)
      .subscribe((data: any) => {
        this.comments = data;
    });
    this.productService.getProducts()
      .subscribe((data: any) => {
        let product = data.filter(product => {
          if (product.id === this.id) {
            return true;
          }
        })
        product[0].imageUrl = this.imageUrl + product[0].img;
        this.product = product[0];
    });
  }
}
