import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApplicantService } from '../applicant.service';
import { Applicant } from '../models/applicant';

@Component({
  selector: 'app-create-applicant',
  templateUrl: './create-applicant.component.html',
  styleUrls: ['./create-applicant.component.css']
})
export class CreateApplicantComponent implements OnInit {
  applicant: Applicant = new Applicant();
  submitted = false;

  constructor(
    private router: Router,
    private applicantService: ApplicantService
    ) { }

  ngOnInit() {
  }

  newApplicant(): void {
    this.submitted = false;
    this.applicant = new Applicant();
  }

  save() {
    this.applicantService.createApplicant(this.applicant).subscribe(
      data => {
        this.applicant = new Applicant();
        // this.redirectToListRoute();
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  redirectToListRoute() {
    this.router.navigate(['/applicants']);
  }
}
