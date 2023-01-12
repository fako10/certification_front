import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Certification } from '../models/certification.model';
const baseUrl = 'http://localhost:8080/api/certifications';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Certification[]> {
    return this.http.get<Certification[]>(baseUrl);
  }
}
