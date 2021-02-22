import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Applicant } from '../models/applicant';
import { ApplicantService } from '../applicant.service';
import { ApplicantListComponent } from '../applicant-list/applicant-list.component'; 

@Component({
  selector: 'app-applicant-details',
  templateUrl: './applicant-details.component.html',
  styleUrls: ['./applicant-details.component.css']
})
export class ApplicantDetailsComponent implements OnInit {
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
}
