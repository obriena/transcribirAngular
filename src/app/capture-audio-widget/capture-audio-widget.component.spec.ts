import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureAudioWidgetComponent } from './capture-audio-widget.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

/*
Needed to clear this error:
Error: StaticInjectorError(DynamicTestModule)[CaptureAudioWidgetComponent -> FormBuilder]: 
  StaticInjectorError(Platform: core)[CaptureAudioWidgetComponent -> FormBuilder]: 
    NullInjectorError: No provider for FormBuilder!
*/
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';


describe('CaptureAudioWidgetComponent', () => {
  let component: CaptureAudioWidgetComponent;
  let fixture: ComponentFixture<CaptureAudioWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      /* 
      Error: StaticInjectorError(DynamicTestModule)[CaptureAudioWidgetComponent -> FormBuilder]: 
        StaticInjectorError(Platform: core)[CaptureAudioWidgetComponent -> FormBuilder]: 
          NullInjectorError: No provider for FormBuilder!

      and

      Error: StaticInjectorError(DynamicTestModule)[CaptureAudioWidgetComponent -> HttpClient]: 
        StaticInjectorError(Platform: core)[CaptureAudioWidgetComponent -> HttpClient]: 
          NullInjectorError: No provider for HttpClient!

      and 

      Error: StaticInjectorError(DynamicTestModule)[CaptureAudioWidgetComponent -> Router]: 
        StaticInjectorError(Platform: core)[CaptureAudioWidgetComponent -> Router]: 
          NullInjectorError: No provider for Router!
      */
      imports: [
          ReactiveFormsModule,
          FormsModule,
          HttpClientModule,
          RouterTestingModule
      ],
      
      declarations: [ CaptureAudioWidgetComponent ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureAudioWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
