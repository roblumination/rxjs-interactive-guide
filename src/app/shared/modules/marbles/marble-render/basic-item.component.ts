import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { MarbleColor, MarbleType } from '@core/models/types/marble';
import { colorPalette } from 'src/app/core/models/constants/colors';

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export abstract class BasicItemComponent {
  public data: string = 'N/A';
  public color: string = colorPalette['red'];
  public type: MarbleType = 'normal';

  constructor(protected chDetRef: ChangeDetectorRef) {}

  public fill(colorName: MarbleColor, value: string): void {
    this.color = colorPalette[colorName];
    this.data = value;
    this.chDetRef.detectChanges();
    this.onDataFilled(colorName, value);
  }

  public setType(type: MarbleType): void {
    this.type = type;
    this.chDetRef.detectChanges();
    this.onTypeSet(type);
  }

  protected onTypeSet(type: MarbleType): void {}
  protected onDataFilled(colorName: MarbleColor, value: string): void {}
}
