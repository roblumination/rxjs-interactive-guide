import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassicMarbleBlockComponent } from './classic-marble-block/classic-marble-block.component';
import { MarbleRenderModule } from '../marble-render/marble-render.module';

const marbleBlocks = [ClassicMarbleBlockComponent];

@NgModule({
  declarations: [...marbleBlocks],
  imports: [CommonModule, MarbleRenderModule],
  exports: [...marbleBlocks],
})
export class MarbleBlocksModule {}
