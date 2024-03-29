import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Examen } from '../models/Examen.model';
import {ExamenGroup} from "../models/ExamenGroup.model";
import {UserExamen} from "../models/UserExamen.model";
import {GlobalConstants} from "../_common/global-constants";
//const examensURL = 'http://164.68.122.151:8080/api/examens';
//const examenGroupsURL = 'http://164.68.122.151:8080/api/examengroups';
//const examenURL = 'http://164.68.122.151:8080/api/examen';
//const userExamenURL = 'http://164.68.122.151:8080/api/userExamen';

const examensURL = GlobalConstants.baseUrl + "examens";
const examenGroupsURL = GlobalConstants.baseUrl + "examengroups";
const examenURL = GlobalConstants.baseUrl + "examen";
const userExamenURL =  GlobalConstants.baseUrl + "userExamen";

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  constructor(private http: HttpClient) { }

  get(id: any): Observable<Examen[]> {
    console.log(`${examensURL}/${id}`);
    return this.http.get<Examen[]>(`${examensURL}/${id}`);
  }

  getExamenGroups(id: any): Observable<ExamenGroup[]> {
    console.log(`${examenGroupsURL}/${id}`);
    return this.http.get<ExamenGroup[]>(`${examenGroupsURL}/${id}`);
  }

  getExamen(id: any) : Observable<Examen> {
    return  this.http.get<Examen>(`${examenURL}/${id}`);
  }

  getUserExamen(id: any) : Observable<UserExamen> {
    return this.http.get<UserExamen>(`${userExamenURL}/${id}`)
  }

}
