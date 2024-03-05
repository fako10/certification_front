import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {GlobalConstants} from "../_common/global-constants";
//const API_URL = 'http://164.68.122.151:8080/api/test/';
//const CERTIF_URL = 'http://164.68.122.151:8080/api/certifications';


const API_URL = GlobalConstants.baseUrl + "test/";
const CERTIF_URL = GlobalConstants.baseUrl + "certifications";;

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(CERTIF_URL , { responseType: 'text' });
  }
  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }



}
