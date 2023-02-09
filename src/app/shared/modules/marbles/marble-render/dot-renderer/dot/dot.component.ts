import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { MarbleColor, MarbleType } from '@core/models/types/marble';
import { BasicItemComponent } from '../../basic-item.component';

@Component({
  selector: 'app-dot',
  templateUrl: './dot.component.html',
  styleUrls: ['./dot.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DotComponent extends BasicItemComponent {
  @HostBinding('style.zIndex') private index: number = 1000;
  public isTextLong: boolean = true;

  protected override onTypeSet(type: MarbleType): void {
    this.index = type == 'complete' ? 500 : 1000;
    this.chDetRef.detectChanges();
  }

  protected override onDataFilled(colorName: MarbleColor, value: string): void {
    this.isTextLong = value.length > 2;
    this.chDetRef.detectChanges();
  }
}
