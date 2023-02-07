import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarbleStandartFrameComponent } from './marble-standart-frame.component';

describe('MarbleStandartFrameComponent', () => {
  let component: MarbleStandartFrameComponent;
  let fixture: ComponentFixture<MarbleStandartFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarbleStandartFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarbleStandartFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
