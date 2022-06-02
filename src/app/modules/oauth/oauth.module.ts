import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OauthRoutingModule } from './oauth-routing.module';
import { PromptComponent } from './components/prompt/prompt.component';
import { OauthService } from "./services/oauth.service";
import { MatDividerModule } from "@angular/material/divider";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";


@NgModule({
  declarations: [
    PromptComponent
  ],
  imports: [
    CommonModule,
    OauthRoutingModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ],
  providers: [
    OauthService
  ]
})
export class OauthModule { }
