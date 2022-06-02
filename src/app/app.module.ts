import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationModule } from "./modules/registration/registration.module";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { LoginModule } from "./modules/login/login.module";
import { AccountModule } from "./modules/account/account.module";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { ApplicationsModule } from "./modules/applications/applications.module";
import { OauthModule } from "./modules/oauth/oauth.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RegistrationModule,
    LoginModule,
    AccountModule,
    ApplicationsModule,
    OauthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
