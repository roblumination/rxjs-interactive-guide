import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarbleStandartFrameComponent } from './marble-standart-frame/marble-standart-frame.component';
import { MarbleBlocksModule } from '../marble-blocks/marble-blocks.module';
import { MarbleBigLogFrameComponent } from './marble-big-log-frame/marble-big-log-frame.component';
import { TransportButtonsComponent } from '@shared/components/transport-buttons/transport-buttons.component';

const frames = [MarbleStandartFrameComponent, MarbleBigLogFrameComponent];

@NgModule({
  declarations: [...frames],
  imports: [CommonModule, MarbleBlocksModule, TransportButtonsComponent],
  exports: [...frames],
})
export class MarbleFramesModule {}
