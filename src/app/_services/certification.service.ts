import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Certification } from '../models/certification.model';
import {Examen} from "../models/Examen.model";
const baseUrl = 'http://localhost:8080/api/certifications';
const Url = 'http://localhost:8080/api/certification';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Certification[]> {
    return this.http.get<Certification[]>(baseUrl);
  }

  getCertification(id: any) : Observable<Certification> {
    return  this.http.get<Certification>(`${baseUrl}/${id}`);
  }

  getCertificationByLibelle(libelle: any) : Observable<Certification> {
    return  this.http.get<Certification>(`${Url}/${libelle}`);
  }

}
