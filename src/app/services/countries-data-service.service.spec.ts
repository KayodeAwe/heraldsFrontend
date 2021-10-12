import { TestBed } from '@angular/core/testing';

import { CountriesDataServiceService } from './countries-data-service.service';

describe('CountriesDataServiceService', () => {
  let service: CountriesDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
