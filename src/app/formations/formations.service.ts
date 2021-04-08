import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formateur } from 'app/formateur/formateur.component';
import { salles } from 'app/salles/salles.component';
import { Observable } from 'rxjs-compat';
import { Formations } from './formations.component';

@Injectable({
  providedIn: 'root'
})
export class FormationsService {

  private baseUrlFormateur = "http://localhost:8080/formateurs";
  private baseUrlSalle = "http://localhost:8080/salles";
  private baseUrlFormation = "http://localhost:8080/formations";

  constructor(private http: HttpClient) { }

  getAllFormation(): Observable<Formations[]>{
    return this.http.get<Formations[]>(`${this.baseUrlFormation}`) ;
  }
  getAllSalle(): Observable<salles[]>{
    return this.http.get<salles[]>(`${this.baseUrlSalle}`);
  }

  getAllFormateur(): Observable<Formateur[]>{
    return this.http.get<Formateur[]>(`${this.baseUrlFormateur}`);
  }
}
