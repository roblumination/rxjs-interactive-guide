import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { MarbleColor, MarbleType } from '@core/models/types/marble';
import { colorPalette } from 'src/app/core/models/constants/colors';

@Component({
  selector: 'app-marble-log-item',
  templateUrl: './marble-log-item.component.html',
  styleUrls: ['./marble-log-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarbleLogItemComponent {
  public data: string = 'N/A';
  public color: string = '#000';
  public type: MarbleType = 'normal';

  constructor(private chDetRef: ChangeDetectorRef) {}

  public fill(colorName: MarbleColor, value: string): void {
    this.color = colorPalette[colorName];
    this.data = value;
    this.chDetRef.detectChanges();
    console.log(colorName, value);
  }

  public setType(type: MarbleType): void {
    this.type = type;
    this.chDetRef.detectChanges();
  }
}
