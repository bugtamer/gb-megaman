import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PasswordService } from './services/password/password.service';
import { AllPasswordsComponent } from './components/all-passwords/all-passwords.component';

@NgModule({
  declarations: [
    AppComponent,
    AllPasswordsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    PasswordService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
