import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryParamTypeComponent } from './add-category-param-type.component';

describe('AddCategoryParamTypeComponent', () => {
  let component: AddCategoryParamTypeComponent;
  let fixture: ComponentFixture<AddCategoryParamTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCategoryParamTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoryParamTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
