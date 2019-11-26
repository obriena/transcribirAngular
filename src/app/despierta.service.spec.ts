import { TestBed } from '@angular/core/testing';

import { DespiertaService } from './despierta.service';

describe('DespiertaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DespiertaService = TestBed.get(DespiertaService);
    expect(service).toBeTruthy();
  });
});
