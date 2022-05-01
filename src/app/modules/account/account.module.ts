import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";


@NgModule({
  declarations: [
    DashboardComponent,
    ApplicationsComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AccountModule { }
