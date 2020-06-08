import { TestBed } from '@angular/core/testing';

import { ChimGuard } from './chim.guard';

describe('ChimGuard', () => {
  let guard: ChimGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChimGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
