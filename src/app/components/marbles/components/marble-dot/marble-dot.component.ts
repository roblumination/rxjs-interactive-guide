import {
  Component,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MarbleColor } from 'src/app/models/common.types';
import { colorPalette } from 'src/app/models/constants/colors';

@Component({
  selector: 'app-marble-dot',
  templateUrl: './marble-dot.component.html',
  styleUrls: ['./marble-dot.component.scss'],
})
export class MarbleDotComponent {
  @Input() data: string = 'N/A';
  // @HostBinding('class.marble-dot') fds = true;
  public color = colorPalette['red'];

  setColor(colorName: MarbleColor) {
    this.color = colorPalette[colorName];
  }
}
