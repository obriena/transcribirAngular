import { TestBed } from '@angular/core/testing';

import { RetrieveTranscriptService } from './retrieve-transcript.service';

describe('RetrieveTranscriptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetrieveTranscriptService = TestBed.get(RetrieveTranscriptService);
    expect(service).toBeTruthy();
  });
});
