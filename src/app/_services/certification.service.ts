import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Certification } from '../models/certification.model';
import {Examen} from "../models/Examen.model";
import {GlobalConstants} from "../_common/global-constants";
const url_certifications = GlobalConstants.baseUrl + "certifications";
const url_certification = GlobalConstants.baseUrl + "certification";

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Certification[]> {
    return this.http.get<Certification[]>(url_certifications);
  }

  getCertification(id: any) : Observable<Certification> {
    return  this.http.get<Certification>(`${url_certifications}/${id}`);
  }

  getCertificationByLibelle(libelle: any) : Observable<Certification> {
    return  this.http.get<Certification>(`${url_certification}/${libelle}`);
  }

}
