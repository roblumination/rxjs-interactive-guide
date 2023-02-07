import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarblesHostDirective } from './marbles-host.directive';
import { MarbleItemsModule } from '../marble-items/marble-items.module';
import { DotRendererComponent } from './dot-renderer/dot-renderer.component';
import { SmallLogRendererComponent } from './small-log-renderer/small-log-renderer.component';

const renderers = [DotRendererComponent, SmallLogRendererComponent];

@NgModule({
  declarations: [MarblesHostDirective, ...renderers],
  imports: [CommonModule, MarbleItemsModule],
  exports: [...renderers, MarblesHostDirective],
})
export class MarbleRenderModule {}
