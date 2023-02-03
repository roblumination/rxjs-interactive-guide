import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { OperatorsListComponent } from './components/operators-list/operators-list.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterOperatorPipe } from './pipes/filter-operator.pipe';
import { OperatorNavigationComponent } from './operator-navigation.component';

@NgModule({
  declarations: [
    OperatorNavigationComponent,
    FilterOperatorPipe,
    NavHeaderComponent,
    OperatorsListComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [OperatorNavigationComponent],
})
export class OperatorNavigationModule {}
