import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarbleBlockComponent } from './components/marble-block/marble-block.component';
import { MarbleStripComponent } from './components/marble-strip/marble-strip.component';
import { MarbleDotComponent } from './components/marble-dot/marble-dot.component';

@NgModule({
  declarations: [
    MarbleBlockComponent,
    MarbleStripComponent,
    MarbleDotComponent,
    MarbleStripComponent,
  ],
  imports: [CommonModule],
  exports: [MarbleBlockComponent]
})
export class MarblesModule {}
