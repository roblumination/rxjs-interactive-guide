import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarbleRenderer } from './marble-renderer.component';

describe('MarbleRendererComponent', () => {
  let component: MarbleRenderer;
  let fixture: ComponentFixture<MarbleRenderer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarbleRenderer],
    }).compileComponents();

    fixture = TestBed.createComponent(MarbleRenderer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
