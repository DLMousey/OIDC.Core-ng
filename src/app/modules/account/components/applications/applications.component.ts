import { Component, OnInit } from '@angular/core';
import { ApplicationsService } from "../../services/applications.service";
import Application from "../../models/application.model";

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

  public applications: Application[] = [];

  constructor(
    private applicationsService: ApplicationsService
  ) { }

  ngOnInit(): void {
    this.applicationsService.getAuthorisedApplications()
      .subscribe(
        data => {
          this.applications = data;
          for (let i = 0; i < 10; i++) {
            this.applications.push({
              description: `Description of tst app ${i}`,
              firstParty: false,
              homepageUrl: "http://example.com",
              id: `b59f5c3e-cc66-457e-85f9-e7d2bfdfe60${i}`,
              name: `Test app ${i}`,
              redirectUrl: "http://example.com/oauth"
            });
          }
        }
      );
  }

}
