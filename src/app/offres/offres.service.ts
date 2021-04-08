import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { offres } from './offres.component';

@Injectable({
  providedIn: 'root'
})
export class OffresService {

  private baseUrl = "http://localhost:8080/services";

  constructor(private http: HttpClient) { }
  getAllOffres(): Observable<offres[]>{
    return this.http.get<offres[]>(`${this.baseUrl}`);
  }


}
