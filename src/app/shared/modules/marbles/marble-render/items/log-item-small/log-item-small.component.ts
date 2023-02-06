import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicItemComponent } from '../basic-item.component';

@Component({
  selector: 'app-marble-log-item',
  templateUrl: './log-item-small.component.html',
  styleUrls: ['./log-item-small.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogItemSmallComponent extends BasicItemComponent {}
