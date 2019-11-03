import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide2Page } from './slide2.page';

describe('Slide2Page', () => {
  let component: Slide2Page;
  let fixture: ComponentFixture<Slide2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
