import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { RegistrationFormComponent } from "../registration-form/registration-form.component";

@Component({
  selector: 'app-registration-form-dialog',
  templateUrl: './registration-form-dialog.component.html',
  styleUrls: ['./registration-form-dialog.component.scss']
})
export class RegistrationFormDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<RegistrationFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
