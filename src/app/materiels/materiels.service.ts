import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { salles } from 'app/salles/salles.component';
import { Observable } from 'rxjs-compat';
import { Materiel } from './materiels.component';

@Injectable({
  providedIn: 'root'
})
export class MaterielsService {

  private baseUrl = "http://localhost:8080/materiels";
  private baseUrlSalle = "http://localhost:8080/salles";
  constructor(private http: HttpClient) { }

  getAllMaterials(): Observable<Materiel[]>{
    return this.http.get<Materiel[]>(`${this.baseUrl}`) ;
  }

  getAllSalle(): Observable<salles[]>{
    return this.http.get<salles[]>(`${this.baseUrlSalle}`);
  }

  addMateriel(id:number,materiel:Materiel): Observable<Materiel>{
    return this.http.post<Materiel>(`${this.baseUrlSalle}/${id}/materiels`,materiel);
  }

  deleteMateriel(id: string): Observable<Materiel[]>{
    return this.http.delete<Materiel[]>(`${this.baseUrl}/${id}`);
  }

  updateMateriel(id :string,materiel: Materiel): Observable<Materiel>{
    return this.http.put<Materiel>(`${this.baseUrl}/${id}`,materiel);
  }
}

  
