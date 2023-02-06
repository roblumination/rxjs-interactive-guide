import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DotComponent } from './items/dot/dot.component';
import { LogItemSmallComponent } from './items/log-item-small/log-item-small.component';
import { LogItemBigComponent } from './items/log-item-big/log-item-big.component';
import { DotRendererComponent } from './renderers/dot-renderer/dot-renderer.component';
import { MarblesHostDirective } from './marbles-host.directive';

const items = [DotComponent, LogItemSmallComponent, LogItemBigComponent];

const renderers = [DotRendererComponent];

@NgModule({
  declarations: [MarblesHostDirective, ...items, ...renderers],
  imports: [CommonModule],
  exports: [...renderers, MarblesHostDirective],
})
export class MarbleRenderModule {}
