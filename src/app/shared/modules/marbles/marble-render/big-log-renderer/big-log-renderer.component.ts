import { Component, Type } from '@angular/core';
import { BasicItemComponent } from '../basic-item.component';
import { BasicRenderer } from '../basic-renderer';
import { LogItemBigComponent } from './log-item-big/log-item-big.component';

@Component({
  selector: 'app-big-log-renderer',
  templateUrl: './big-log-renderer.component.html',
  styleUrls: ['./big-log-renderer.component.scss'],
})
export class BigLogRendererComponent extends BasicRenderer {
  protected override itemClass: Type<BasicItemComponent> = LogItemBigComponent;
}
