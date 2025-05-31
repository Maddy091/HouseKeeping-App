import { TestBed } from '@angular/core/testing';

import { FeedbackserService } from './feedbackser.service';

describe('FeedbackserService', () => {
  let service: FeedbackserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedbackserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
