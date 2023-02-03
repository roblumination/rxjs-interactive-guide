import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InDevelopementComponent } from './components/in-developement/in-developement.component';
import { OperatorListRoutingModule } from './operator-list-routing.module';
import { OperatorCreateModule } from './pages/creation/operator-create.module';
import { OperatorListComponent } from './operator-list.component';
import { OperatorNavigationModule } from './components/operator-navigation/operator-navigation.module';

@NgModule({
  declarations: [OperatorListComponent, InDevelopementComponent],
  imports: [
    CommonModule,
    OperatorListRoutingModule,
    OperatorCreateModule,
    OperatorNavigationModule,
  ],
})
export class OperatorListModule {}
