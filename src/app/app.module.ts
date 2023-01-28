import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllPasswordsComponent } from './components/all-passwords/all-passwords.component';

@NgModule({
  declarations: [
    AppComponent,
    AllPasswordsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
