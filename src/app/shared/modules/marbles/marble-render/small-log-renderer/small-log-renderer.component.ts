import { Component, Type } from '@angular/core';
import { fadeAnimation } from '@core/animations/common';
import { BasicItemComponent } from '../basic-item.component';
import { BasicRenderer } from '../basic-renderer';
import { LogItemSmallComponent } from './log-item-small/log-item-small.component';

@Component({
  selector: 'app-small-log-renderer',
  templateUrl: './small-log-renderer.component.html',
  styleUrls: ['./small-log-renderer.component.scss'],
  animations: [fadeAnimation],
})
export class SmallLogRendererComponent extends BasicRenderer {
  protected override itemClass: Type<BasicItemComponent> =
    LogItemSmallComponent;
  public tooltipText: string | null = '';

  public showTooltip(text: string): void {
    this.tooltipText = text;
  }

  public hideTooltip(): void {
    this.tooltipText = null;
  }
}
