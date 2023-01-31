import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { OperatorsListComponent } from './components/operators-list/operators-list.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FilterOperatorPipe } from './pipes/filter-operator.pipe';

@NgModule({
  declarations: [
    NavigationComponent,
    FilterOperatorPipe,
    NavHeaderComponent,
    OperatorsListComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [NavigationComponent],
})
export class NavigationModule {}
