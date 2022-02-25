import { TestBed } from '@angular/core/testing';

import { TrackerapiService } from './trackerapi.service';

describe('TrackerapiService', () => {
  let service: TrackerapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackerapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
