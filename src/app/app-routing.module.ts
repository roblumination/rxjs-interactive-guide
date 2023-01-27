import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntervalComponent } from './pages/creation/interval/interval.component';
import { InDevelopementComponent } from './pages/in-developement/in-developement.component';

const creation: Routes = [
  {
    path: 'interval',
    component: IntervalComponent,
  },
];

const routes: Routes = [
  ...creation,
  {
    path: '**',
    component: InDevelopementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
