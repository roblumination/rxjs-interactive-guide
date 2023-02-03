import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarblesModule } from 'src/app/shared/components/marbles/marbles.module';

import { IntervalComponent } from './interval/interval.component';
import { FromComponent } from './from/from.component';
import { FromEventComponent } from './from-event/from-event.component';
import { OfComponent } from './of/of.component';
import { RangeComponent } from './range/range.component';
import { TimerComponent } from './timer/timer.component';
import { IifComponent } from './iif/iif.component';
import { ThrowErrorComponent } from './throw-error/throw-error.component';
import { ClockComponent } from 'src/app/shared/components/clock/clock.component';
import { OperatorCreateRoutingModule } from './operator-create-routing.module';

const operators = [
  IntervalComponent,
  FromComponent,
  FromEventComponent,
  OfComponent,
  RangeComponent,
  TimerComponent,
  IifComponent,
  ThrowErrorComponent,
];

@NgModule({
  declarations: [...operators],
  imports: [
    CommonModule,
    OperatorCreateRoutingModule,
    MarblesModule,
    ClockComponent,
  ],
  exports: [...operators],
})
export class OperatorCreateModule {}
