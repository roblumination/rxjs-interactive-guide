import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarbleBlockComponent } from './marble-block.component';

describe('MarbleBlockComponent', () => {
  let component: MarbleBlockComponent;
  let fixture: ComponentFixture<MarbleBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarbleBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarbleBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
