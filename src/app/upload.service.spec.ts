import { TestBed } from '@angular/core/testing';

import { UploadService } from './upload.service';
import { HttpClientModule } from '@angular/common/http';

describe('UploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
  ],
  }));

  it('should be created', () => {
    const service: UploadService = TestBed.get(UploadService);
    expect(service).toBeTruthy();
  });
});
