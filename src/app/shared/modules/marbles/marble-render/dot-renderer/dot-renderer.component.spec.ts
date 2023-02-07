import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotRendererComponent } from './dot-renderer.component';

describe('MarbleDotRendererComponent', () => {
  let component: DotRendererComponent;
  let fixture: ComponentFixture<DotRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DotRendererComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DotRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
