import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { salles } from './archive_salle.component';
@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  private baseUrl = "http://localhost:8080/archive/salles";

  constructor(private http: HttpClient) { }

  getAllSalle(): Observable<salles[]>{
    return this.http.get<salles[]>(`${this.baseUrl}`);
  }

}
