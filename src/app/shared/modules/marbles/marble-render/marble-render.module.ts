import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarblesHostDirective } from './marbles-host.directive';
import { DotRendererComponent } from './dot-renderer/dot-renderer.component';
import { SmallLogRendererComponent } from './small-log-renderer/small-log-renderer.component';
import { DotComponent } from './dot-renderer/dot/dot.component';
import { LogItemSmallComponent } from './small-log-renderer/log-item-small/log-item-small.component';
import { BigLogRendererComponent } from './big-log-renderer/big-log-renderer.component';
import { LogItemBigComponent } from './big-log-renderer/log-item-big/log-item-big.component';

const items = [DotComponent, LogItemSmallComponent, LogItemBigComponent];
const renderers = [
  DotRendererComponent,
  SmallLogRendererComponent,
  BigLogRendererComponent,
];

@NgModule({
  declarations: [MarblesHostDirective, ...renderers, ...items],
  imports: [CommonModule],
  exports: [...renderers, MarblesHostDirective],
})
export class MarbleRenderModule {}
