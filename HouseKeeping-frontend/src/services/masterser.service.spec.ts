import { TestBed } from '@angular/core/testing';

import { MasterserService } from './masterser.service';

describe('MasterserService', () => {
  let service: MasterserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
