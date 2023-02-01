import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorsCreationModule } from './creation/operators-creation.module';

import { InDevelopementComponent } from './in-developement/in-developement.component';

const modules = [OperatorsCreationModule];

@NgModule({
  declarations: [InDevelopementComponent],
  imports: [CommonModule, ...modules],
  exports: [...modules, InDevelopementComponent],
})
export class OperatorPagesModule {}
