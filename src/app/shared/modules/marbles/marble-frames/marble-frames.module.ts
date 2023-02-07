import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarbleStandartFrameComponent } from './marble-standart-frame/marble-standart-frame.component';
import { MarbleBlocksModule } from '../marble-blocks/marble-blocks.module';

const frames = [MarbleStandartFrameComponent];

@NgModule({
  declarations: [...frames],
  imports: [CommonModule, MarbleBlocksModule],
  exports: [...frames],
})
export class MarbleFramesModule {}
