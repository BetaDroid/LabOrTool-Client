import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponentParamComponent } from './add-component-param.component';

describe('AddComponentParamComponent', () => {
  let component: AddComponentParamComponent;
  let fixture: ComponentFixture<AddComponentParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComponentParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponentParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
