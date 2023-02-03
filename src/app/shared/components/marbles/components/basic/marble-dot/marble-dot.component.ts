import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
} from '@angular/core';
import { MarbleColor, MarbleType } from '@core/models/types/marble';
import { colorPalette } from 'src/app/core/models/constants/colors';

@Component({
  selector: 'app-marble-dot',
  templateUrl: './marble-dot.component.html',
  styleUrls: ['./marble-dot.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarbleDotComponent {
  public data: string = 'N/A';
  public color: string = colorPalette['red'];
  public completeIndicator: boolean = false;
  public type: MarbleType = 'normal';
  @HostBinding('style.zIndex') private index: number = 1000;

  constructor(private chDetRef: ChangeDetectorRef) {}

  fill(colorName: MarbleColor, value: string): void {
    this.color = colorPalette[colorName];
    this.data = value;
    this.chDetRef.detectChanges();
  }

  public setType(type: MarbleType): void {
    this.type = type;
    this.index = type == 'complete' ? 500 : 1000;
    this.chDetRef.detectChanges();
  }
}
