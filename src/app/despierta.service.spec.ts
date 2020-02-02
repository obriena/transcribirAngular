import { TestBed } from '@angular/core/testing';

import { DespiertaService } from './despierta.service';

/*
Error: StaticInjectorError(DynamicTestModule)[CaptureAudioWidgetComponent -> HttpClient]: 
  StaticInjectorError(Platform: core)[CaptureAudioWidgetComponent -> HttpClient]: 
    NullInjectorError: No provider for HttpClient!
*/
import { HttpClientModule } from "@angular/common/http";

describe('DespiertaService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    /* 
      Error: StaticInjectorError(DynamicTestModule)[CaptureAudioWidgetComponent -> HttpClient]: 
        StaticInjectorError(Platform: core)[CaptureAudioWidgetComponent -> HttpClient]: 
          NullInjectorError: No provider for HttpClient!
    */
   imports: [
    HttpClientModule
    ],
  }));

  it('should be created', () => {
    const service: DespiertaService = TestBed.get(DespiertaService);
    expect(service).toBeTruthy();
  });
});
