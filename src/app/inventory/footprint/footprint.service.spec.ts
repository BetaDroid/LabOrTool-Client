import { TestBed, inject } from '@angular/core/testing';

import { FootprintService } from './footprint.service';

describe('FootprintService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FootprintService]
    });
  });

  it('should ...', inject([FootprintService], (service: FootprintService) => {
    expect(service).toBeTruthy();
  }));
});
