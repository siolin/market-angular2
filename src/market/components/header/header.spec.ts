import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

// services
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CartService } from '../../modules/cart/services/cart.service';

// test component
import { HeaderComponent } from './header';

// use components
import { CartButtonComponent } from '../../modules/cart/components/cart-button/cart-button.component';
import { UserComponent } from '../user/user';
import { PopUpCartComponent } from '../../modules/cart/components/pop-up-cart/pop-up-cart.component';

// describe test
describe('Header component', () => {

  let comp:    HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  let authServiceStub;
  let routerStub;
  let cartServiceStub;


  beforeEach(() => {
    // test object of AuthService
    authServiceStub = {
      getToken() {
        return 'token';
      }
    };

    // test object of Router
    routerStub = {
      url: '/cart'
    };

    // test object of CartService
    cartServiceStub = {
      products: [],
      countProducts() {
        return 0;
      },
      getProducts() {
        return this.products;
      }
    };

    // @NgModule create
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent,
                      CartButtonComponent,
                      UserComponent,
                      PopUpCartComponent ], // declare the test component
      providers: [
        { provide: AuthService, useValue: authServiceStub },
        { provide: CartService, useValue: cartServiceStub },
        { provide: Router, useValue: routerStub},
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    });

    // create component
    fixture = TestBed.createComponent(HeaderComponent);

    comp = fixture.componentInstance; // headerComponent test instance

    // authService actually injected into the component
    const authService = fixture.debugElement.injector.get(AuthService);

    // router actually injected into the component
    const router = fixture.debugElement.injector.get(Router);

    // query for the title <a> by CSS element selector
    de = fixture.debugElement.query(By.css('a'));
    el = de.nativeElement;
  });

  it('should display original siteName', () => {
    expect(el.textContent).toContain(comp.siteName);
  });

  it('should display a different test siteName', () => {
    comp.siteName = 'Test';
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.siteName);
  });

  it('should return token', () => {
    expect(comp.checkAuth()).toBe(true);
  });

  it('should return true when cartState="/cart"', () => {
    expect(comp.checkUrl()).toBe(true);
  });

    it('should return false when cartState="/"', () => {
    comp.cartState = '/';
    fixture.detectChanges();
    expect(comp.checkUrl()).toBe(false);
  });
});
