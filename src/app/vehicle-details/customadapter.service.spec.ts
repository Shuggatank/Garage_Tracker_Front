import { TestBed } from '@angular/core/testing';

import { CustomadapterService } from './customadapter.service';

describe('CustomadapterService', () => {
  let service: CustomadapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomadapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
