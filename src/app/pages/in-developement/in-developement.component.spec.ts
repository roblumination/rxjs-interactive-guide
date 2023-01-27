import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InDevelopementComponent } from './in-developement.component';

describe('InDevelopementComponent', () => {
  let component: InDevelopementComponent;
  let fixture: ComponentFixture<InDevelopementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InDevelopementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InDevelopementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
