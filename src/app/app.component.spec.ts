import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    const storeStub = () => ({
      dispatch: (arg) => ({}),
      subscribe: (f) => f({}),
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent],
      providers: [{ provide: Store, useFactory: storeStub }],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it(`title has default value`, () => {
    expect(component.title).toEqual(`exercisetzstats`);
  });
  it(`lastID has default value`, () => {
    expect(component.lastID).toEqual(18990092);
  });
  it(`itemSizeCount has default value`, () => {
    expect(component.itemSizeCount).toEqual(10);
  });
});
