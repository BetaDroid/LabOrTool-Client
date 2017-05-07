import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCategoryParamTypeComponent } from './view-category-param-type.component';

describe('ViewCategoryParamTypeComponent', () => {
  let component: ViewCategoryParamTypeComponent;
  let fixture: ComponentFixture<ViewCategoryParamTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCategoryParamTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCategoryParamTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
