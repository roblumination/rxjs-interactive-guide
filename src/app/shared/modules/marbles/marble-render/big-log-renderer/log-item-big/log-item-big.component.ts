import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicItemComponent } from '../../basic-item.component';

@Component({
  selector: 'app-marble-log-item',
  templateUrl: './log-item-big.component.html',
  styleUrls: ['./log-item-big.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogItemBigComponent extends BasicItemComponent {
  public creationDate = new Date();
}
