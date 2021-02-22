import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  private endpoint = 'http://localhost:3000/registration-crud-rest/api/applicants';

  constructor(private http: HttpClient) { }

  getApplicant(id: number): Observable<any> {
    return this.http.get(`${this.endpoint}/${id}`);
  }

  createApplicant(applicant: Object): Observable<Object> {
    return this.http.post(`${this.endpoint}`, applicant);
  }

  updateApplicant(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.endpoint}/${id}`, value);
  }

  deleteApplicant(id: number): Observable<any> {
    return this.http.delete(`${this.endpoint}/${id}`, { responseType: 'text' });
  }

  getApplicantList(): Observable<any> {
    return this.http.get(`${this.endpoint}`);
  }
}
