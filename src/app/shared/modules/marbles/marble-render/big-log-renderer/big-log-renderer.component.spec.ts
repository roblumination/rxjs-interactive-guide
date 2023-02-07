import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigLogRendererComponent } from './big-log-renderer.component';

describe('BigLogRendererComponent', () => {
  let component: BigLogRendererComponent;
  let fixture: ComponentFixture<BigLogRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigLogRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigLogRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
