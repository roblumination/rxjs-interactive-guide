import { Component, Type } from '@angular/core';
import { BasicItemComponent } from '../basic-item.component';
import { BasicRenderer } from '../basic-renderer';
import { DotComponent } from './dot/dot.component';

@Component({
  selector: 'app-marble-dot-renderer',
  templateUrl: './dot-renderer.component.html',
  styleUrls: ['./dot-renderer.component.scss'],
})
export class DotRendererComponent extends BasicRenderer {
  protected override itemClass: Type<BasicItemComponent> = DotComponent;
  protected override itemLifeTime: number | null = 10_000;
}
