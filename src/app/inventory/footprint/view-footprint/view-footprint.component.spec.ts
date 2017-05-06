import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFootprintComponent } from './view-footprint.component';

describe('ViewFootprintComponent', () => {
  let component: ViewFootprintComponent;
  let fixture: ComponentFixture<ViewFootprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFootprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFootprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
