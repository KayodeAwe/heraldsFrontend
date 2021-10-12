import { TestBed } from '@angular/core/testing';

import { ChurchCircuitServiceService } from './church-circuit-service.service';

describe('ChurchCircuitServiceService', () => {
  let service: ChurchCircuitServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChurchCircuitServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
