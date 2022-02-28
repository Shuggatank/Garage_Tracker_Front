import { TestBed } from '@angular/core/testing';

import { CustomDateParserService } from './custom-date-parser.service';

describe('CustomDateParserService', () => {
  let service: CustomDateParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomDateParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
