import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
} from '@angular/core';
import { BasicItemComponent } from '../../basic-item.component';
import { SmallLogRendererComponent } from '../small-log-renderer.component';

@Component({
  selector: 'app-marble-log-item',
  templateUrl: './log-item-small.component.html',
  styleUrls: ['./log-item-small.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogItemSmallComponent extends BasicItemComponent {
  constructor(
    protected override chDetRef: ChangeDetectorRef,
    private renderer: SmallLogRendererComponent
  ) {
    super(chDetRef);
  }

  @HostListener('mouseover') public onMouseOver(): void {
    this.renderer.showTooltip(this.data);
  }

  @HostListener('mouseleave') public onMouseLeave(): void {
    this.renderer.hideTooltip();
  }
}
