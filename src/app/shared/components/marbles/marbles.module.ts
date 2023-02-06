import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarbleBlockComponent } from './components/marble-block/marble-block.component';
import { MarbleStripComponent } from './components/basic/marble-strip/marble-strip.component';
import { MarbleDotComponent } from './components/basic/marble-dot/marble-dot.component';
import { MarbleLogItemComponent } from './components/basic/marble-log-item/marble-log-item.component';
import { MarbleBigLogItemComponent } from './components/basic/marble-big-log-item/marble-big-log-item.component';
import { MarbleStripRendererComponent } from './components/renderers/marble-strip-renderer/marble-strip-renderer.component';

@NgModule({
  declarations: [
    MarbleBlockComponent,
    MarbleStripComponent,
    MarbleDotComponent,
    MarbleStripComponent,
    MarbleLogItemComponent,
    MarbleBigLogItemComponent,
    MarbleStripRendererComponent,
  ],
  imports: [CommonModule],
  exports: [MarbleBlockComponent],
})
export class MarblesModule {}
