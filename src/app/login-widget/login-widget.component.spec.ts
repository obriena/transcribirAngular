import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWidgetComponent } from './login-widget.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginWidgetComponent', () => {
  let component: LoginWidgetComponent;
  let fixture: ComponentFixture<LoginWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
          ReactiveFormsModule,
          FormsModule,
          HttpClientModule,
          RouterTestingModule
      ],
      declarations: [ LoginWidgetComponent ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
