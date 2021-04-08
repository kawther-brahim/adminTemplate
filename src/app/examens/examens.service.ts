import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { examens } from './examens.component';



@Injectable({
  providedIn: 'root'
})
export class ExamensService {


  private baseUrl = "http://localhost:8080/examens";


  constructor(private http: HttpClient) { }

  getAllExamens(): Observable<examens[]>{
    return this.http.get<examens[]>(`${this.baseUrl}`);
  }
  deleteExamen(examenId: number): Observable<examens[]> {
    return this.http.delete<examens[]>(`${this.baseUrl}/${examenId}`);
  }

  updateExamen(id:number,examen: examens): Observable<examens> {
    return this.http.put<examens>(`${this.baseUrl}/${id}`, examen);
  }

  addExamen(examen: examens): Observable<examens> {
    return this.http.post<examens>(`${this.baseUrl}`, examen);
  }
 
}