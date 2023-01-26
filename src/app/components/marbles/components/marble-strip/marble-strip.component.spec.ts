import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarbleStripComponent } from './marble-strip.component';

describe('MarbleStripComponent', () => {
  let component: MarbleStripComponent;
  let fixture: ComponentFixture<MarbleStripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarbleStripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarbleStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
