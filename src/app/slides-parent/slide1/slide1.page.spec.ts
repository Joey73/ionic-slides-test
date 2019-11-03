import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide1Page } from './slide1.page';

describe('Slide1Page', () => {
  let component: Slide1Page;
  let fixture: ComponentFixture<Slide1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
