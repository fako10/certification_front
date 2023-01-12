import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Examen } from '../models/Examen.model';
const baseUrl = 'http://localhost:8080/api/examens';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  constructor(private http: HttpClient) { }

  get(id: any): Observable<Examen[]> {
    console.log(`${baseUrl}/${id}`);
    return this.http.get<Examen[]>(`${baseUrl}/${id}`);
  }

}
