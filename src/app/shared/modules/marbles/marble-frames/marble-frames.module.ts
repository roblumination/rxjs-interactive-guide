import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarbleStandartFrameComponent } from './marble-standart-frame/marble-standart-frame.component';
import { MarbleBlocksModule } from '../marble-blocks/marble-blocks.module';
import { TransportButtonsComponent } from '@shared/components/transport-buttons/transport-buttons.component';

const frames = [MarbleStandartFrameComponent];

@NgModule({
  declarations: [...frames],
  imports: [CommonModule, MarbleBlocksModule, TransportButtonsComponent],
  exports: [...frames],
})
export class MarbleFramesModule {}
