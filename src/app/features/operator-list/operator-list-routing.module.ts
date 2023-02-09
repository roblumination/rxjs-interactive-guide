import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OperatorListComponent } from './operator-list.component';
import { InDevelopementComponent } from './components/in-developement/in-developement.component';
import { FromEventComponent } from './pages/creation/from-event/from-event.component';
import { FromComponent } from './pages/creation/from/from.component';
import { IifComponent } from './pages/creation/iif/iif.component';
import { IntervalComponent } from './pages/creation/interval/interval.component';
import { OfComponent } from './pages/creation/of/of.component';
import { RangeComponent } from './pages/creation/range/range.component';
import { ThrowErrorComponent } from './pages/creation/throw-error/throw-error.component';
import { TimerComponent } from './pages/creation/timer/timer.component';
import { CombineLatestComponent } from './pages/join/combine-latest/combine-latest.component';

const creation: Routes = [
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

const join: Routes = [
  { path: 'combineLatest', component: CombineLatestComponent },
];

const routes: Routes = [
  {
    path: '',
    // pathMatch: 'full',
    component: OperatorListComponent,
    children: [
      ...creation,
      ...join,
      {
        path: '**',
        component: InDevelopementComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperatorListRoutingModule {}
