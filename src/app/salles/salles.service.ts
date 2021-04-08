import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'RxJS/Observable';
import { salles } from './salles.component';


@Injectable({
  providedIn: 'root'
})
export class SallesService {


  private baseUrl = "http://localhost:8080/salles";


  constructor(private http: HttpClient) { }

  getAllSalle(): Observable<salles[]>{
    return this.http.get<salles[]>(`${this.baseUrl}`);
  }

  addSalle(salle: salles): Observable<salles> {
    return this.http.post<salles>(`${this.baseUrl}`, salle);
  }


  updateSalle(id:number,salle: salles): Observable<salles> {
    return this.http.put<salles>(`${this.baseUrl}/${id}`, salle);
  }

  deleteSalle(salleId: number): Observable<salles[]> {
    return this.http.delete<salles[]>(`${this.baseUrl}/${salleId}`);
  }
}
