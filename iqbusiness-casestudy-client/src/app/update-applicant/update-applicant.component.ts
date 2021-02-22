import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Applicant } from '../models/applicant';
import { ApplicantService } from '../applicant.service';

@Component({
  selector: 'app-update-applicant',
  templateUrl: './update-applicant.component.html',
  styleUrls: ['./update-applicant.component.css']
})
export class UpdateApplicantComponent implements OnInit {
  id: number;
  applicant: Applicant;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private applicantService: ApplicantService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.applicant = new Applicant();

    this.applicantService.getApplicant(this.id).subscribe(
      data => {
        this.applicant = data;
      }, 
      error => {
        console.log(error);
      }
    );
  }

  redirectToListRoute() {
    this.router.navigate(['/applicants']);
  }

  updateApplicant() {
    this.applicantService
    .updateApplicant(this.id, this.applicant)
    .subscribe(
      data => {
        this.applicant = new Applicant();
        this.redirectToListRoute();
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    this.updateApplicant();
  }
}
