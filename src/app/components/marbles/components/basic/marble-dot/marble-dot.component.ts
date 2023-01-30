import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { MarbleColor } from 'src/app/models/common.types';
import { colorPalette } from 'src/app/models/constants/colors';

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
  @HostBinding('style.zIndex') private index: number = 1000;

  constructor(private chDetRef: ChangeDetectorRef) {}

  public setColor(colorName: MarbleColor): void {
    this.color = colorPalette[colorName];
    this.chDetRef.detectChanges();
  }

  public setData(text: string): void {
    this.data = text;
    this.chDetRef.detectChanges();
  }

  public setCompleteMode(): void {
    this.completeIndicator = true;
    this.chDetRef.detectChanges();
    this.index = 500;
  }
}
