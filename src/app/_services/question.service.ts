import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Examen } from '../models/Examen.model';
import { UserExamen } from '../models/UserExamen.model';
const baseUrl = 'http://localhost:8080/api/examens/create-user-examen';
const savedExamenUrl = 'http://localhost:8080/api/examens/get-user-examen/';
const saveExamenUrls = 'http://localhost:8080/api/examens/saveExamen';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  get(id: any): Observable<UserExamen> {
    console.log(`${baseUrl}/${id}`);
    return this.http.get<UserExamen>(`${baseUrl}/${id}`);
  }

  getUserExamen(id: any): Observable<UserExamen> {
    console.log(`${baseUrl}/${id}`);
    return this.http.get<UserExamen>(`${savedExamenUrl}/${id}`);
  }


  saveExamen(userExamen : UserExamen): Observable<UserExamen> {
    console.log('service begin')
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(userExamen);
    //console.log(body)

    return this.http.post<UserExamen>(saveExamenUrls, body, { headers })
    //return this.http.post<UserExamen>(saveExamenUrls, body, { headers }).subscribe(data => {
    //});
  
    //return this.http.get<UserExamen>(`${saveExamenUrls}`);
    //return this.http.post(saveExamenUrl, body,{'headers':headers});
  }

}