import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWidgetComponent } from './header-widget.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HeaderWidgetComponent', () => {
  let component: HeaderWidgetComponent;
  let fixture: ComponentFixture<HeaderWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderWidgetComponent ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
