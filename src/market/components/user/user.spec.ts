import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

// services
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ng2-webstorage';

// test component
import { UserComponent } from './user';

// use directives
import { LogoutDirective } from '../../directives/logout';

// describe test
describe('User component', () => {

  let comp:    UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  let localStorageServiceStub;
  let spyRouter;
  let spyEvent;
  let routerStub;
  let authServiceStub;
  let e;

  beforeEach(() => {
    // test object of AuthService
    authServiceStub = {
      getToken() {
        return 'token';
      }
    };

    // test object of Router
    routerStub = {
      url: '/cart',
      navigate() {}
    };

    // test object Event
    e = {
      preventDefault() {}
    };

    spyRouter = spyOn(routerStub, 'navigate');
    spyEvent = spyOn(e, 'preventDefault');

    // test objest LocalStorageService
    localStorageServiceStub = {
      clear() {
        return true;
      }
    };

    // @NgModule create
    TestBed.configureTestingModule({
      declarations: [ UserComponent,
                      LogoutDirective], // declare the test component
      providers: [
        { provide: AuthService, useValue: authServiceStub },
        { provide: Router, useValue: routerStub},
        { provide: ComponentFixtureAutoDetect, useValue: true },
        { provide: LocalStorageService, useValue: localStorageServiceStub }
      ]
    });

    // create component
    fixture = TestBed.createComponent(UserComponent);

    comp = fixture.componentInstance; // userComponent test instance

    // authService actually injected into the component
    const authService = fixture.debugElement.injector.get(AuthService);

    // router actually injected into the component
    const router = fixture.debugElement.injector.get(Router);

    // query for the title <a> by CSS element selector
    de = fixture.debugElement.query(By.css('a'));
    el = de.nativeElement;
  });

  it('should display "Выход"', () => {
    expect(el.textContent).toContain('Выход');
  });

  it('sould call onClickLogout after click on "Выход" button', () => {
    const spy = spyOn(comp, 'onClickLogout');
    de.triggerEventHandler('click', null);
    expect(spy.calls.any()).toBe(true);
  });

  it('should call e.preventDefault after click on "Выход" button', () => {
    comp.onClickLogout(e);
    expect(spyEvent.calls.any()).toBe(true);
  });

  it('should call router.navigate after click on "Выход" button', () => {
    comp.onClickLogout(e);
    expect(spyRouter.calls.any()).toBe(true);
    expect(spyRouter.calls.argsFor(0)).toEqual([['/']]);
  });

});
