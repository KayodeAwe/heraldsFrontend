import { TestBed } from '@angular/core/testing';

import { BibleServiceService } from './bible-service.service';

describe('BibleServiceService', () => {
  let service: BibleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
