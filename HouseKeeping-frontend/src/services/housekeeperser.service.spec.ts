import { TestBed } from '@angular/core/testing';

import { HousekeeperserService } from './housekeeperser.service';

describe('HousekeeperserService', () => {
  let service: HousekeeperserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HousekeeperserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
