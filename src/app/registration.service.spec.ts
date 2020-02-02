import { TestBed } from '@angular/core/testing';

import { RegistrationService } from './registration.service';
import { HttpClientModule } from '@angular/common/http';

describe('RegistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
  ],
  }));

  it('should be created', () => {
    const service: RegistrationService = TestBed.get(RegistrationService);
    expect(service).toBeTruthy();
  });
});
