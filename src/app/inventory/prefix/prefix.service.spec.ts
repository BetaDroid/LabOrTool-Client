import { TestBed, inject } from '@angular/core/testing';

import { PrefixService } from './prefix.service';

describe('PrefixService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrefixService]
    });
  });

  it('should ...', inject([PrefixService], (service: PrefixService) => {
    expect(service).toBeTruthy();
  }));
});
