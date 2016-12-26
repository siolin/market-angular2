import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

import { HeaderComponent } from './header';


describe('Header component(inline template)', () => {

  let comp:    HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    // @NgModule create
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ], // declare the test component
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    });

    // create component
    fixture = TestBed.createComponent(HeaderComponent);

    comp = fixture.componentInstance; // headerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('a'));
    el = de.nativeElement;
  });

  it('true is true', () => expect(true).toBe(true));

  it('should display original siteName', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.siteName);
  });

  it('should display a different test siteName', () => {
    comp.siteName = 'Test Site Name';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test Site Name');
  });
});
