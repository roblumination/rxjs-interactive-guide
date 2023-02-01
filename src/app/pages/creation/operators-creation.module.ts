import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarblesModule } from 'src/app/components/marbles/marbles.module';

import { IntervalComponent } from './interval/interval.component';
import { FromComponent } from './from/from.component';
import { FromEventComponent } from './from-event/from-event.component';
import { OfComponent } from './of/of.component';
import { RangeComponent } from './range/range.component';
import { TimerComponent } from './timer/timer.component';
import { IifComponent } from './iif/iif.component';

const operators = [
  IntervalComponent,
  FromComponent,
  FromEventComponent,
  OfComponent,
  RangeComponent,
  TimerComponent,
  IifComponent,
];

@NgModule({
  declarations: [...operators],
  imports: [CommonModule, MarblesModule],
  exports: [...operators],
})
export class OperatorsCreationModule {}
