import { TestBed } from '@angular/core/testing';

import { RetrieveMediaService } from './retrieve-media.service';
import { HttpClientModule } from '@angular/common/http';

describe('RetrieveMediaService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
        HttpClientModule
    ],
  }));

  it('should be created', () => {
    const service: RetrieveMediaService = TestBed.get(RetrieveMediaService);
    expect(service).toBeTruthy();
  });
});
