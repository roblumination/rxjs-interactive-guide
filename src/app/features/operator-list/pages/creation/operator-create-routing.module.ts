import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { MarblesModule } from 'src/app/shared/components/marbles/marbles.module';

import { IntervalComponent } from './interval/interval.component';
import { FromComponent } from './from/from.component';
import { FromEventComponent } from './from-event/from-event.component';
import { OfComponent } from './of/of.component';
import { RangeComponent } from './range/range.component';
import { TimerComponent } from './timer/timer.component';
import { IifComponent } from './iif/iif.component';
import { ThrowErrorComponent } from './throw-error/throw-error.component';

const routes: Routes = [
  {
    path: 'interval',
    component: IntervalComponent,
  },
  {
    path: 'from',
    component: FromComponent,
  },
  {
    path: 'fromEvent',
    component: FromEventComponent,
  },
  {
    path: 'of',
    component: OfComponent,
  },
  {
    path: 'range',
    component: RangeComponent,
  },
  {
    path: 'timer',
    component: TimerComponent,
  },
  {
    path: 'iif',
    component: IifComponent,
  },
  {
    path: 'throwError',
    component: ThrowErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperatorCreateRoutingModule {}
