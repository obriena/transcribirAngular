import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMediaWidgetComponent } from './view-media-widget.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';


describe('ViewMediaWidgetComponent', () => {
  let component: ViewMediaWidgetComponent;
  let fixture: ComponentFixture<ViewMediaWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      
      imports: [
          RouterTestingModule
      ],
      declarations: [ ViewMediaWidgetComponent ],
      schemas:[NO_ERRORS_SCHEMA],
      providers:[
        {provide: HttpClient}
      ]
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
