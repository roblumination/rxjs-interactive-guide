import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallLogRendererComponent } from './small-log-renderer.component';

describe('SmallLogRendererComponent', () => {
  let component: SmallLogRendererComponent;
  let fixture: ComponentFixture<SmallLogRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallLogRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallLogRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
