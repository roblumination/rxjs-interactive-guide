import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntervalComponent } from './creation/interval/interval.component';
import { FromComponent } from './creation/from/from.component';
import { MarblesModule } from '../components/marbles/marbles.module';
import { InDevelopementComponent } from './in-developement/in-developement.component';
import { FromEventComponent } from './creation/from-event/from-event.component';

const operators = [
  InDevelopementComponent,
  IntervalComponent,
  FromComponent,
  FromEventComponent,
];

@NgModule({
  declarations: [...operators],
  imports: [CommonModule, MarblesModule],
  exports: [...operators],
})
export class OperatorPagesModule {}
