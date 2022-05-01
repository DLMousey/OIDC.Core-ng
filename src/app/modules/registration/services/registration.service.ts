import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment as env } from "../../../../environments/environment";

export interface RegistrationData {
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(
    private http: HttpClient
  ) { }

  public register(data: RegistrationData): Observable<any> {
    return this.http.post(`${env.oauth.baseUrl}/registration`, data)
      .pipe(
        map((response: any) => response.data)
      )
  }
}
