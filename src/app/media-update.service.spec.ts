import { TestBed } from '@angular/core/testing';

import { MediaUpdateService } from './media-update.service';

describe('MediaUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediaUpdateService = TestBed.get(MediaUpdateService);
    expect(service).toBeTruthy();
  });
});
