import { TestBed, inject } from '@angular/core/testing';

import { CategoryParamTypeService } from './category-param-type.service';

describe('CategoryParamTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryParamTypeService]
    });
  });

  it('should ...', inject([CategoryParamTypeService], (service: CategoryParamTypeService) => {
    expect(service).toBeTruthy();
  }));
});
