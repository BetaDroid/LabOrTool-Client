import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFootprintComponent } from './add-footprint.component';

describe('AddFootprintComponent', () => {
  let component: AddFootprintComponent;
  let fixture: ComponentFixture<AddFootprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFootprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFootprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
