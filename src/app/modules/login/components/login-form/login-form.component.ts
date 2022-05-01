import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../services/login.service";
import { AbstractControl, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { Router } from "@angular/router";
import { environment as env } from "../../../../../environments/environment";

export class LoginErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loading: boolean = false;
  public error: boolean = false;
  public formGroup: FormGroup;
  public matcher: LoginErrorStateMatcher;

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });

    this.matcher = new LoginErrorStateMatcher();
  }

  ngOnInit(): void {
  }

  public submitLogin(): void {
    const email = this.email.value;
    const password = this.password.value;

    this.loginService.passwordGrantLogin({
      email,
      password
    }).subscribe(
      data => {
        sessionStorage.setItem(`${env.storage.prefix}-token`, data);
        this.router.navigateByUrl('/');
      },
      err => {
        this.loading = false;
        this.error = true;
      }
    )
  }

  public get email(): AbstractControl {
    return this.formGroup.get('email') as AbstractControl;
  }

  public get password(): AbstractControl {
    return this.formGroup.get('password') as AbstractControl;
  }

}
