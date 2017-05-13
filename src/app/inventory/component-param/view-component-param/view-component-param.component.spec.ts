import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComponentParamComponent } from './view-component-param.component';

describe('ViewComponentParamComponent', () => {
  let component: ViewComponentParamComponent;
  let fixture: ComponentFixture<ViewComponentParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewComponentParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponentParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
