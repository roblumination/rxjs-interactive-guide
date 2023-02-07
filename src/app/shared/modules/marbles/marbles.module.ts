import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarbleBlocksModule } from './marble-blocks/marble-blocks.module';
import { MarbleFramesModule } from './marble-frames/marble-frames.module';

@NgModule({
  imports: [CommonModule, MarbleBlocksModule, MarbleFramesModule],
  exports: [MarbleBlocksModule, MarbleFramesModule],
})
export class MarblesModule {}
