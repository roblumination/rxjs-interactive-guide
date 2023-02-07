import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarbleFramesModule } from './marble-frames/marble-frames.module';

@NgModule({
  imports: [CommonModule, MarbleFramesModule],
  exports: [MarbleFramesModule],
})
export class MarblesModule {}
