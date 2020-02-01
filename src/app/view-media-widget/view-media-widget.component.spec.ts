import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMediaWidgetComponent } from './view-media-widget.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ViewMediaWidgetComponent', () => {
  let component: ViewMediaWidgetComponent;
  let fixture: ComponentFixture<ViewMediaWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMediaWidgetComponent ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMediaWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
