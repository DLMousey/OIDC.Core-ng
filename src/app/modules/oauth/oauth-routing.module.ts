import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromptComponent } from "./components/prompt/prompt.component";
import { AuthenticatedGuard } from "../common/guards/authenticated.guard";

const routes: Routes = [
  { path: 'oauth', component: PromptComponent, canActivate: [AuthenticatedGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OauthRoutingModule { }
