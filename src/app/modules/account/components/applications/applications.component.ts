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
        data => this.applications = data
      );
  }

}
