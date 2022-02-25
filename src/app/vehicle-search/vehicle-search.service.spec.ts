import { TestBed } from '@angular/core/testing';

import { VehicleSearchService } from './vehicle-search.service';

describe('VehicleSearchService', () => {
  let service: VehicleSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
