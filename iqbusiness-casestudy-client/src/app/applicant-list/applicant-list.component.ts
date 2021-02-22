import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ApplicantDetailsComponent } from '../applicant-details/applicant-details.component';
import { ApplicantService } from '../applicant.service';
import { Applicant } from '../models/applicant';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css']
})
export class ApplicantListComponent implements OnInit {
  applicants: Observable<Applicant[]>;

  constructor(
    private router: Router,
    private applicantService: ApplicantService
    ) { }

  ngOnInit() {
    this.loadApplicants();
  }

  loadApplicants() {
    this.applicants = this.applicantService.getApplicantList();
  }

  deleteApplicant(id: number) {
    this.applicantService.deleteApplicant(id).subscribe(
      data => {
        this.loadApplicants();
      }
    )
  }

  updateApplicantDetails(id: number) {
    this.router.navigate(['update', id]);
  }

  viewApplicantDetails(id: number) {
    this.router.navigate(['details', id]);
  }
}
