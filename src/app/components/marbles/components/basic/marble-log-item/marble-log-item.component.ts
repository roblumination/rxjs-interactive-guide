import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { MarbleColor } from 'src/app/models/common.types';
import { colorPalette } from 'src/app/models/constants/colors';

@Component({
  selector: 'app-marble-log-item',
  templateUrl: './marble-log-item.component.html',
  styleUrls: ['./marble-log-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarbleLogItemComponent {
  public data: string = 'N/A';
  public color: string = '#000';

  constructor(private chDetRef: ChangeDetectorRef) {}

  public setColor(colorName: MarbleColor): void {
    this.color = colorPalette[colorName];
    this.chDetRef.detectChanges();
  }

  public setData(text: string): void {
    this.data = text;
    this.chDetRef.detectChanges();
  }
}
