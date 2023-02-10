import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorListRoutingModule } from './operator-list-routing.module';
import { OperatorNavigationModule } from './components/operator-navigation/operator-navigation.module';
import { MarblesModule } from '@shared/modules/marbles/marbles.module';

import { OperatorListComponent } from './operator-list.component';
import { InDevelopementComponent } from './components/in-developement/in-developement.component';
import { FromComponent } from './pages/creation/from/from.component';
import { FromEventComponent } from './pages/creation/from-event/from-event.component';
import { IifComponent } from './pages/creation/iif/iif.component';
import { IntervalComponent } from './pages/creation/interval/interval.component';
import { OfComponent } from './pages/creation/of/of.component';
import { RangeComponent } from './pages/creation/range/range.component';
import { ThrowErrorComponent } from './pages/creation/throw-error/throw-error.component';
import { TimerComponent } from './pages/creation/timer/timer.component';
import { ClockComponent } from '@shared/components/clock/clock.component';
import { TransportButtonsComponent } from '@shared/components/transport-buttons/transport-buttons.component';
import { CombineLatestComponent } from './pages/join/combine-latest/combine-latest.component';
import { ConcatComponent } from './pages/join/concat/concat.component';
import { ForkJoinComponent } from './pages/join/forl-join/fork-join.component';
import { MergeComponent } from './pages/join/merge/merge.component';
import { PartitionComponent } from './pages/join/partition/partition.component';
import { RaceComponent } from './pages/join/race/race.component';
import { ZipComponent } from './pages/join/zip/zip.component';

const creation = [
  FromEventComponent,
  FromComponent,
  IifComponent,
  IntervalComponent,
  OfComponent,
  RangeComponent,
  ThrowErrorComponent,
  TimerComponent,
];

const join = [
  CombineLatestComponent,
  ConcatComponent,
  ForkJoinComponent,
  MergeComponent,
  PartitionComponent,
  RaceComponent,
  ZipComponent,
];

@NgModule({
  declarations: [
    OperatorListComponent,
    InDevelopementComponent,
    ...creation,
    ...join,
  ],
  imports: [
    CommonModule,
    OperatorListRoutingModule,
    OperatorNavigationModule,
    MarblesModule,
    ClockComponent,
    TransportButtonsComponent,
  ],
})
export class OperatorListModule {}
