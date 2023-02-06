import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarbleBlocksModule } from './marble-blocks/marble-blocks.module';

@NgModule({
  imports: [CommonModule, MarbleBlocksModule],
  exports: [MarbleBlocksModule],
})
export class MarblesModule {}
