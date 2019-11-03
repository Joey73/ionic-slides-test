import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesParentPage } from './slides-parent.page';

describe('SlidesParentPage', () => {
  let component: SlidesParentPage;
  let fixture: ComponentFixture<SlidesParentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidesParentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesParentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
