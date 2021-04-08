import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { examens } from './archive-examen.component';

@Injectable({
  providedIn: 'root'
})
export class ArchiveExamenService {

  private baseUrl = "http://localhost:8080/archive/examens";

  constructor(private http: HttpClient) { }

  getAllExamens(): Observable<examens[]>{
    return this.http.get<examens[]>(`${this.baseUrl}`);
  }
}
