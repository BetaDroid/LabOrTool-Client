import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryParamTypeComponent } from './category-param-type.component';

describe('CategoryParamTypeComponent', () => {
  let component: CategoryParamTypeComponent;
  let fixture: ComponentFixture<CategoryParamTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryParamTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryParamTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
