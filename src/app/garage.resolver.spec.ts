import { TestBed } from '@angular/core/testing';

import { GarageResolver } from './garage.resolver';

describe('GarageResolver', () => {
  let resolver: GarageResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GarageResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
