import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DotComponent } from './dot/dot.component';
import { LogItemSmallComponent } from './log-item-small/log-item-small.component';
import { LogItemBigComponent } from './log-item-big/log-item-big.component';

const items = [DotComponent, LogItemSmallComponent, LogItemBigComponent];

@NgModule({
  declarations: [...items],
  imports: [CommonModule],
  exports: [...items],
})
export class MarbleItemsModule {}
