import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { HttpClientModule } from "@angular/common/http";
import { RegistrationService } from "./services/registration.service";
import { MatDialogModule } from "@angular/material/dialog";
import { RegistrationFormDialogComponent } from './components/registration-form-dialog/registration-form-dialog.component';


@NgModule({
  declarations: [
    RegistrationFormComponent,
    RegistrationFormDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegistrationRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    RegistrationService
  ]
})
export class RegistrationModule { }
