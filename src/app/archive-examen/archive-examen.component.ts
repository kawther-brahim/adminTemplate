import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ArchiveExamenService } from './archive-examen.service';

@Component({
  selector: 'app-archive-examen',
  templateUrl: './archive-examen.component.html',
  styleUrls: ['./archive-examen.component.css']
})
export class ArchiveExamenComponent implements OnInit {

  public examens: examens[];

  constructor(private archiveExamenService:ArchiveExamenService) { }

 
  ngOnInit() :void {
    this.getExamens();

  }

  public getExamens(): void {
    this.archiveExamenService.getAllExamens().subscribe(
      (response: examens[]) => {
        this.examens = response;
        console.log(this.examens);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  
  public searchExamen(key: string): void {
    console.log(key);
    const results: examens[] = [];
    for (const exam of this.examens) {
      if (exam.libelle.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        exam.niveau.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        exam.libelle.toLowerCase().indexOf(key.toLowerCase()) !== -1||
        exam.prix.toString().indexOf(key.toLowerCase()) !== -1  ) {
        results.push(exam);
      }
    }
    this.examens = results;
    if (results.length === 0 || !key) {
      this.getExamens();
    }
  }

}


export class examens {
  id:number;
  libelle: string;
  niveau: string;
  prix:number;
  specialite:string;
}
