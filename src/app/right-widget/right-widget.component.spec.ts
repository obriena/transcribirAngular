import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightWidgetComponent } from './right-widget.component';
import { HttpClient } from '@angular/common/http';

describe('RightWidgetComponent', () => {
  let component: RightWidgetComponent;
  let fixture: ComponentFixture<RightWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightWidgetComponent ],
      providers: [
        {provide: HttpClient}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
