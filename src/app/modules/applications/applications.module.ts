import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { ApplicationsService } from "./services/applications.service";
import { FormDialogComponent } from './components/form-dialog/form-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";


@NgModule({
  declarations: [
    FormComponent,
    FormDialogComponent
  ],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    ApplicationsService
  ]
})
export class ApplicationsModule { }
