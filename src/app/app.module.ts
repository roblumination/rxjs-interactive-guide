import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarblesModule } from './components/marbles/marbles.module';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    MarblesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
