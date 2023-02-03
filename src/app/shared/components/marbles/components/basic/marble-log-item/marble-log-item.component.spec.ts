import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarbleLogItemComponent } from './marble-log-item.component';

describe('MarbleLogItemComponent', () => {
  let component: MarbleLogItemComponent;
  let fixture: ComponentFixture<MarbleLogItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarbleLogItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarbleLogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
