import { TestBed, inject } from '@angular/core/testing';

import { NoteTypeService } from './note-type.service';

describe('NoteTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteTypeService]
    });
  });

  it('should be created', inject([NoteTypeService], (service: NoteTypeService) => {
    expect(service).toBeTruthy();
  }));
});
