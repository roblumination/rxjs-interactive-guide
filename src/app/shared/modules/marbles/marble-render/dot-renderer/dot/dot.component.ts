import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { MarbleType } from '@core/models/types/marble';
import { BasicItemComponent } from '../../basic-item.component';

@Component({
  selector: 'app-dot',
  templateUrl: './dot.component.html',
  styleUrls: ['./dot.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DotComponent extends BasicItemComponent {
  @HostBinding('style.zIndex') private index: number = 1000;

  public override setType(type: MarbleType): void {
    this.type = type;
    this.index = type == 'complete' ? 500 : 1000;
    this.chDetRef.detectChanges();
  }
}
