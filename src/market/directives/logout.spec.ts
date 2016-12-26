import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

// services
import { LocalStorageService } from 'ng2-webstorage';

// test component
import { TestComponent } from './test.component';

// test directive
import { LogoutDirective } from './logout';

// describe test
describe('Logout directive', () => {

  let comp:    TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let de:      DebugElement;

  let localStorageServiceStub;
  let spy;


  beforeEach(() => {
    // test localStorageService
    localStorageServiceStub = {
      clear(field: string) {
        return true;
      }
    };

    // @NgModule create
    TestBed.configureTestingModule({
      declarations: [ TestComponent,
                      LogoutDirective ], // declare the test component
      providers: [
        { provide: LocalStorageService, useValue: localStorageServiceStub }
      ]
    });

    spy = spyOn(localStorageServiceStub, 'clear');

    // create component
    fixture = TestBed.createComponent(TestComponent);

    comp = fixture.componentInstance; // headerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('div'));
  });

  it('should display original siteName', () => {
    de.triggerEventHandler('click', null);
    expect(spy.calls.any()).toBe(true);
  });

});
