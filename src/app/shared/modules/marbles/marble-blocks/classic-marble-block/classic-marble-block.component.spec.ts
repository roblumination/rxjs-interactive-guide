import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicMarbleBlockComponent } from './classic-marble-block.component';

describe('ClassicMarbleBlockComponent', () => {
  let component: ClassicMarbleBlockComponent;
  let fixture: ComponentFixture<ClassicMarbleBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassicMarbleBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassicMarbleBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
