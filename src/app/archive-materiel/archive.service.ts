import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { salles } from 'app/salles/salles.component';
import { Observable } from 'rxjs-compat';
import { Materiel } from './archive-materiel.component';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  private baseUrl = "http://localhost:8080/archive/materiels";
  private baseUrlSalle = "http://localhost:8080/salles";

  constructor(private http: HttpClient) { }

  

  getAllSalle(): Observable<salles[]>{
    return this.http.get<salles[]>(`${this.baseUrlSalle}`);
  }

  getAllMaterials(): Observable<Materiel[]>{
    return this.http.get<Materiel[]>(`${this.baseUrl}`) ;
  }

}
