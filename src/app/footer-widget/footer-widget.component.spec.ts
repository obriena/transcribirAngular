import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterWidgetComponent } from './footer-widget.component';
import { HttpClientModule } from '@angular/common/http';

describe('FooterWidgetComponent', () => {
  let component: FooterWidgetComponent;
  let fixture: ComponentFixture<FooterWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
          HttpClientModule
      ],
      declarations: [ FooterWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
