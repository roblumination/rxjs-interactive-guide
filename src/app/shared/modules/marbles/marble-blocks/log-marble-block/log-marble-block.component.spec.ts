import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogMarbleBlockComponent } from './log-marble-block.component';

describe('LogMarbleBlockComponent', () => {
  let component: LogMarbleBlockComponent;
  let fixture: ComponentFixture<LogMarbleBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogMarbleBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogMarbleBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
