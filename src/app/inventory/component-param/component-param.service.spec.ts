import { TestBed, inject } from '@angular/core/testing';

import { ComponentParamService } from './component-param.service';

describe('ComponentParamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentParamService]
    });
  });

  it('should ...', inject([ComponentParamService], (service: ComponentParamService) => {
    expect(service).toBeTruthy();
  }));
});
