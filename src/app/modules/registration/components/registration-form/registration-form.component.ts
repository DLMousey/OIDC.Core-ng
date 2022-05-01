import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { RegistrationService } from "../../services/registration.service";
import { MatDialog } from "@angular/material/dialog";
import { RegistrationFormDialogComponent } from "../registration-form-dialog/registration-form-dialog.component";
import { Router } from "@angular/router";

export class RegistrationErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  public formGroup: FormGroup;
  public matcher: RegistrationErrorStateMatcher;

  constructor(
    private registrationService: RegistrationService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });

    this.matcher = new RegistrationErrorStateMatcher();
  }

  ngOnInit(): void {
  }

  public submitRegistration(): void {
    const email = this.email.value;
    const username = this.username.value;
    const password = this.password.value;

    this.registrationService.register({
      email,
      username,
      password
    }).subscribe(
      data => {
        console.log('got data', data);
        this.openDialog()
      },
      err => console.error('got error', err)
    )
  }

  public openDialog(): void {
    const ref = this.dialog.open(RegistrationFormDialogComponent, {
      width: '250px'
    });

    ref.afterClosed().subscribe(result => {
      this.router.navigate(['/login']);
    })
  }

  public get email(): AbstractControl {
    return this.formGroup.get('email') as AbstractControl;
  }

  public get username(): AbstractControl {
    return this.formGroup.get('username') as AbstractControl;
  }

  public get password(): AbstractControl {
    return this.formGroup.get('password') as AbstractControl;
  }

}
