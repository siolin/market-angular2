import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA }    from '@angular/core';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

import { MockBackend } from '@angular/http/testing';

// // import { Observable } from 'rxjs/Observable';

// services
// // import { ProductService } from '../../services/product.service';
// import { Router, RouterLinkWithHref } from '@angular/router';
// // import { CartService } from '../../modules/cart/services/cart.service';
import { Http } from '@angular/http';

// list component
import { ListComponent } from './list';

// use directives
import { RouterLinkStubDirective } from '../../test/router-link-stub.directive';

// class Http {}
// class ProductService {}
// class Router {}

// describe test
describe('List component', () => {

  let comp:    ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

//   let spy;
//   let productServiceStub;
  // let routerStub;
  // let httpStub;


  beforeEach(() => {
//     // test object of AuthService
//     productServiceStub = {
//       getProducts() {}
//     };

    // test object of Router
    // routerStub = {
    //   url: '/cart'
    // };

//     // // test object of http
//     // httpStub = {
//     //   get() {
//     //     return Observable.create({
//     //         'id':  1,
//     //         'title': 'test',
//     //         'text': 'test text',
//     //         'img': '1.jpg'
//     //       });
//     //   }
//     // };

//     // setup spy on the `getQuote` method
//     // spy = spyOn(productServiceStub, 'getProducts')
//     //       .and.returnValue(Observable.create({
//     //         id:  1,
//     //         title: 'test',
//     //         text: 'test text',
//     //         img: '1.jpg'
//     //       }).map((res: Response) => {
//     //         return res.json();
//     //       }));

    // @NgModule create
    TestBed.configureTestingModule({
      declarations: [ ListComponent, RouterLinkStubDirective ], // declare the test component
      providers: [
        MockBackend,
        // Router,
        // RouterLinkWithHref,
        // { provide: ProductService, useValue: productServiceStub },
        // { provide: Router, useValue: routerStub},
        { provide: ComponentFixtureAutoDetect, useValue: true },
        { provide: Http,
          useFactory: (backend, options) => {
            return new Http(backend, options);
          },
          deps: [MockBackend]}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    // create component
    fixture = TestBed.createComponent(ListComponent);

    comp = fixture.componentInstance; // listComponent test instance

//     // productService actually injected into the component
//     const productService = fixture.debugElement.injector.get(ProductService);

//     // query for the title <h3> by CSS element selector
    de = fixture.debugElement.query(By.css('h3'));
    el = de.nativeElement;
  });

  it('should display original siteName', () => {
    // expect(el.textContent).toContain('test');
  });

});
