import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductionComponent } from './view-production.component';

describe('ViewProductionComponent', () => {
  let component: ViewProductionComponent;
  let fixture: ComponentFixture<ViewProductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
