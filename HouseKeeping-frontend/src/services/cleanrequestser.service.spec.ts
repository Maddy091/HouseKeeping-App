import { TestBed } from '@angular/core/testing';

import { CleanrequestserService } from './cleanrequestser.service';

describe('CleanrequestserService', () => {
  let service: CleanrequestserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CleanrequestserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
