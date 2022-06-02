import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import PromptParams from "../../interfaces/prompt-params.interface";
import { OauthService } from "../../services/oauth.service";

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss']
})
export class PromptComponent implements OnInit {

  public params: PromptParams;
  public prompt: any;

  constructor(
    private route: ActivatedRoute,
    private oauthService: OauthService
  ) {
    const params = this.route.snapshot.queryParams;

    this.params = {
      clientId: params['client_id'],
      state: params['state'],
      scopes: params['scopes'].split(','),
      type: params['type'],
      redirectUri: params['redirect_uri']
    }
  }

  ngOnInit(): void {
    this.oauthService.getAuthorisationPrompt(this.params)
      .subscribe(
        data => this.prompt = data,
        err => console.error(err)
      )
  }

}
