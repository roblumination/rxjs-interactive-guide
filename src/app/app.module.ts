import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { OperatorPagesModule } from './pages/operator-pages.module';
import { HeaderComponent } from './components/header/header.component';
import { NavigationModule } from './components/navigation/navigation.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    OperatorPagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
