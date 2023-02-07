import { Component, Type } from '@angular/core';
import { BasicItemComponent } from '@shared/modules/marbles/marble-items/basic-item.component';
import { DotComponent } from '@shared/modules/marbles/marble-items/dot/dot.component';
import { BasicRenderer } from '../basic-renderer';

@Component({
  selector: 'app-marble-dot-renderer',
  templateUrl: './dot-renderer.component.html',
  styleUrls: ['./dot-renderer.component.scss'],
})
export class DotRendererComponent extends BasicRenderer {
  protected override itemClass: Type<BasicItemComponent> = DotComponent;
  protected override itemLifeTime: number | null = 10_000;
}
