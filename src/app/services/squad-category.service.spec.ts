import { TestBed } from '@angular/core/testing';

import { SquadCategoryService } from './squad-category.service';

describe('SquadCategoryService', () => {
  let service: SquadCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SquadCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
