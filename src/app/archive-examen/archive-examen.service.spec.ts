import { TestBed } from '@angular/core/testing';

import { ArchiveExamenService } from './archive-examen.service';

describe('ArchiveExamenService', () => {
  let service: ArchiveExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchiveExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
