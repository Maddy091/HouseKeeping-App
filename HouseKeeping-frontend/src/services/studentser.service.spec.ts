import { TestBed } from '@angular/core/testing';

import { StudentserService } from '../services/studentser.service';

describe('StudentserService', () => {
  let service: StudentserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
