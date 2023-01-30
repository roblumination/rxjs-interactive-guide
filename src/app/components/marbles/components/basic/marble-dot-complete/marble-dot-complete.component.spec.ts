import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarbleDotCompleteComponent } from './marble-dot-complete.component';

describe('MarbleDotCompleteComponent', () => {
  let component: MarbleDotCompleteComponent;
  let fixture: ComponentFixture<MarbleDotCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarbleDotCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarbleDotCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
