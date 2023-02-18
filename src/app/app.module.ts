import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PasswordService } from './services/password/password.service';
import { PasswordScreenComponent } from './components/password-screen/password-screen.component';
import { BossScreenComponent } from './components/boss-screen/boss-screen.component';
import { BossComponent } from './components/boss/boss.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordScreenComponent,
    BossScreenComponent,
    BossComponent,
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
