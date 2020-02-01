import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationWidgetComponent } from './registration-widget.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('RegistrationWidgetComponent', () => {
  let component: RegistrationWidgetComponent;
  let fixture: ComponentFixture<RegistrationWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
          ReactiveFormsModule,
          FormsModule,
          HttpClientModule,
          RouterTestingModule
      ],
      declarations: [ RegistrationWidgetComponent ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
