import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment as env } from "../../../../environments/environment";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  constructor(
    private http: HttpClient
  ) { }

  public getAuthorisedApplications(): Observable<any> {
    return this.http.get(`${env.oauth.baseUrl}/applications`, { withCredentials: true })
      .pipe(
        map((response: any) => response.data)
      )
  }
}
