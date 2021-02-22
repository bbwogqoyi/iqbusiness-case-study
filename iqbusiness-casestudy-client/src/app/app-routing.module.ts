import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { ApplicantDetailsComponent } from './applicant-details/applicant-details.component';
import { CreateApplicantComponent } from './create-applicant/create-applicant.component';
import { UpdateApplicantComponent } from './update-applicant/update-applicant.component';


const routes: Routes = [
  { path: '', redirectTo: 'applicants', pathMatch: 'full' },
  { path: 'applicants', component: ApplicantListComponent },
  { path: 'add', component: CreateApplicantComponent },
  { path: 'update/:id', component: UpdateApplicantComponent },
  { path: 'details/:id', component: ApplicantDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
