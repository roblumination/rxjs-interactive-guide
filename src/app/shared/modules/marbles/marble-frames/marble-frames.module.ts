import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarbleStandartFrameComponent } from './marble-standart-frame/marble-standart-frame.component';
import { MarbleBlocksModule } from '../marble-blocks/marble-blocks.module';
import { MarbleBigLogFrameComponent } from './marble-big-log-frame/marble-big-log-frame.component';

const frames = [MarbleStandartFrameComponent, MarbleBigLogFrameComponent];

@NgModule({
  declarations: [...frames],
  imports: [CommonModule, MarbleBlocksModule],
  exports: [...frames],
})
export class MarbleFramesModule {}
