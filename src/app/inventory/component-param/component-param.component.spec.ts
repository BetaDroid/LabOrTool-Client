import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentParamComponent } from './component-param.component';

describe('ComponentParamComponent', () => {
  let component: ComponentParamComponent;
  let fixture: ComponentFixture<ComponentParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
