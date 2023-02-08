import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarbleBigLogFrameComponent } from './marble-big-log-frame.component';

describe('MarbleBigLogFrameComponent', () => {
  let component: MarbleBigLogFrameComponent;
  let fixture: ComponentFixture<MarbleBigLogFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarbleBigLogFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarbleBigLogFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
