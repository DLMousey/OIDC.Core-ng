import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import PromptParams from "../interfaces/prompt-params.interface";
import { Observable } from "rxjs";
import { environment as env } from "../../../../environments/environment";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  constructor(
    private http: HttpClient
  ) { }

  public getAuthorisationPrompt(data: PromptParams): Observable<any> {
    return this.http.get(
      `${env.oauth.baseUrl}/oauth/authorisation-code?clientId=${data.clientId}&state=${data.state}&redirectUri=${data.redirectUri}&scopes=${data.scopes.join(',')}`,
      { withCredentials: true }
    ).pipe(
      map((response: any) => response.data)
    );
  }
}
