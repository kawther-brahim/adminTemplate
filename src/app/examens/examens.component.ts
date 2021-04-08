import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ExamensService } from './examens.service';

declare var $:any;
@Component({
  selector: 'app-examens',
  templateUrl: './examens.component.html',
  styleUrls: ['./examens.component.css']
})
export class examensComponent implements OnInit {
  
  public examens: examens[];
  public editExamen:examens;
  public deleteExamen:examens;

  constructor(private examensService: ExamensService,private router: Router) { }

  goToPage(pageName:string):void
  {
    this.router.navigate([`${pageName}` ]);
  }
  ngOnInit() :void {
    this.getExamens();

  }

  public getExamens(): void {
    this.examensService.getAllExamens().subscribe(
      (response: examens[]) => {
        this.examens = response;
        console.log(this.examens);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteExamen(examenId: number): void {
    this.examensService.deleteExamen(examenId).subscribe(
      (response:examens[]) => {
        console.log(response);
        this.getExamens();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdateExamen(id :number,examen: examens): void {
    this.examensService.updateExamen(id,examen).subscribe(
      (response: examens) => {
        console.log(response);
        this.getExamens();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  
 public onAddExamen(addForm: NgForm): void {
  document.getElementById('add-employee-form').click();
  this.examensService.addExamen(addForm.value).subscribe(
    (response: examens) => {
      console.log(response);
      this.getExamens();
      addForm.reset();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
      addForm.reset();
    }
  );
}

  public onOpenModal(examen: examens, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
     this.editExamen = examen;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      this.deleteExamen= examen;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container.appendChild(button);
    button.click(); 
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


  

showNotification(from, align, ch){
  
  var message:String="null";
  if(ch==="add"){
    message="Salle Ajoutée avec Succés.";
  }

  if(ch==="update"){
    message="Salle Mis à Jour avec Succés.";
  }

  if(ch==="delete"){
    message="Salle Archivée avec Succés.";
  }
  const type = ['success'];
  $.notify({
      icon: "notifications",
      message: message

  },{
      type: type[0],
      timer: 10,
      placement: {
          from: from,
          align: align
      },
      template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
        '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
        '<i class="material-icons" data-notify="icon">notifications</i> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
      '</div>'
  });

}
}
export class examens {
  id:number;
  libelle: string;
  niveau: string;
  prix:number;
  specialite:string;
}

