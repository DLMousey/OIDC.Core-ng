import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

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

}
