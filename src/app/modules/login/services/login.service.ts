import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment as env } from "../../../../environments/environment";

export interface PasswordGrantData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  public passwordGrantLogin(data: PasswordGrantData): Observable<any> {
    return this.http.post(`${env.oauth.baseUrl}/oauth/password`, {
      grantType: 'password',
      clientId: env.oauth.clientId,
      email: data.email,
      password: data.password
    }, {
      withCredentials: true
    }).pipe(
        map((response: any) => response.data)
      )
  }
}
