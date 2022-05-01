import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { ApplicationData, ApplicationsService } from "../../services/applications.service";
import { FormDialogComponent } from "../form-dialog/form-dialog.component";
import { MatDialog } from "@angular/material/dialog";

export class ApplicationFormStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public loading: boolean = false;
  public error: boolean = false;
  public formGroup: FormGroup;
  public matcher: ApplicationFormStateMatcher;

  constructor(
    private applicationsService: ApplicationsService,
    private dialog: MatDialog
  ) {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.minLength(12)]),
      homepage: new FormControl('', [Validators.required]),
      redirect: new FormControl('', [Validators.required])
    });

    this.matcher = new ApplicationFormStateMatcher();
  }

  ngOnInit(): void {
  }

  public submitApplication(): void {
    const data: ApplicationData = {
      name: this.name.value,
      description: this.description.value,
      homepage: this.homepage.value,
      redirect: this.redirect.value
    }

    this.applicationsService.createApplication(data).subscribe(
      data => this.openDialog(data),
      err => console.error('got error', err)
    )
  }

  public openDialog(data: any): void {
    const ref = this.dialog.open(FormDialogComponent, {
      width: '500px',
      data
    });

    ref.afterClosed().subscribe((result: any) => console.log(result));
  }

  public get name(): AbstractControl {
    return this.formGroup.get('name') as AbstractControl;
  }

  public get description(): AbstractControl {
    return this.formGroup.get('description') as AbstractControl;
  }

  public get homepage(): AbstractControl {
    return this.formGroup.get('homepage') as AbstractControl;
  }

  public get redirect(): AbstractControl {
    return this.formGroup.get('redirect') as AbstractControl;
  }

}
