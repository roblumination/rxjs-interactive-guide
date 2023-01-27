import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarblesModule } from './components/marbles/marbles.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PageComponent } from './components/page/page.component';
import { IntervalComponent } from './pages/creation/interval/interval.component';
import { InDevelopementComponent } from './pages/in-developement/in-developement.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterOperatorPipe } from './components/navigation/filter-operator.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { OperatorPagesModule } from './pages/operator-pages.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PageComponent,
    FilterOperatorPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    OperatorPagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
