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

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PageComponent,
    IntervalComponent,
    InDevelopementComponent,
    FilterOperatorPipe,
  ],
  imports: [
    BrowserModule,
    MarblesModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
