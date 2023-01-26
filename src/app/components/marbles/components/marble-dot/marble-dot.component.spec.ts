import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarbleDotComponent } from './marble-dot.component';

describe('MarbleDotComponent', () => {
  let component: MarbleDotComponent;
  let fixture: ComponentFixture<MarbleDotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarbleDotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarbleDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
