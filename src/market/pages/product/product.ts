import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

import {CommentService} from '../../services/comment.service';
import {ProductService} from '../../services/product.service';
import {requestOptionsProvider} from '../../services/default-request-options.service';

@Component({
  selector: 'product',
  template: require('./product.html'),
  providers: [CommentService, ProductService, requestOptionsProvider]
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
        console.log(data);
    });
  }

  onSubmitComment(f: NgForm, e: any) {
    // e.preventDefault();
    // console.log(f.value);
    this.newComment = f.value;
    if (this.addComment(this.id, this.newComment)) {
      console.log('Comment was add');
    }
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
