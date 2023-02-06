import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorListRoutingModule } from './operator-list-routing.module';
import { OperatorNavigationModule } from './components/operator-navigation/operator-navigation.module';
import { MarblesModule } from '@shared/modules/marbles/marbles.module';

import { OperatorListComponent } from './operator-list.component';
import { InDevelopementComponent } from './components/in-developement/in-developement.component';
import { FromComponent } from './pages/creation/from/from.component';
// import { FromEventComponent } from './pages/creation/from-event/from-event.component';
// import { IifComponent } from './pages/creation/iif/iif.component';
// import { IntervalComponent } from './pages/creation/interval/interval.component';
// import { OfComponent } from './pages/creation/of/of.component';
// import { RangeComponent } from './pages/creation/range/range.component';
// import { ThrowErrorComponent } from './pages/creation/throw-error/throw-error.component';
// import { TimerComponent } from './pages/creation/timer/timer.component';
import { ClockComponent } from '@shared/components/clock/clock.component';

const creation = [
  // FromEventComponent,
  FromComponent,
  // IifComponent,
  // IntervalComponent,
  // OfComponent,
  // RangeComponent,
  // ThrowErrorComponent,
  // TimerComponent,
];

@NgModule({
  declarations: [OperatorListComponent, InDevelopementComponent, ...creation],
  imports: [
    CommonModule,
    OperatorListRoutingModule,
    OperatorNavigationModule,
    MarblesModule,
    ClockComponent,
  ],
})
export class OperatorListModule {}
