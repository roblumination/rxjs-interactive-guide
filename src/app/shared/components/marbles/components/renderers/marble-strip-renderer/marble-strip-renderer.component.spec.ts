import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarbleStripRendererComponent } from './marble-strip-renderer.component';

describe('MarbleStripRendererComponent', () => {
  let component: MarbleStripRendererComponent;
  let fixture: ComponentFixture<MarbleStripRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarbleStripRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarbleStripRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
