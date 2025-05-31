import { TestBed } from '@angular/core/testing';

import { TimetableserService } from './timetableser.service';

describe('TimetableserService', () => {
  let service: TimetableserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimetableserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
