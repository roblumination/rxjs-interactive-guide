import { Component, Type } from '@angular/core';
import { BasicItemComponent } from '@shared/modules/marbles/marble-items/basic-item.component';
import { LogItemSmallComponent } from '@shared/modules/marbles/marble-items/log-item-small/log-item-small.component';
import { BasicRenderer } from '../basic-renderer';

@Component({
  selector: 'app-small-log-renderer',
  templateUrl: './small-log-renderer.component.html',
  styleUrls: ['./small-log-renderer.component.scss'],
})
export class SmallLogRendererComponent extends BasicRenderer {
  protected override itemClass: Type<BasicItemComponent> =
    LogItemSmallComponent;
}
