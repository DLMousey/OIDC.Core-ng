import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from "./components/form/form.component";
import { AuthenticatedGuard } from "../common/guards/authenticated.guard";

const routes: Routes = [
  { path: 'applications/create', component: FormComponent, canActivate: [AuthenticatedGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
