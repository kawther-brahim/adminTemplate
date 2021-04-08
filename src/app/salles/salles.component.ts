import { Component, OnInit } from '@angular/core';
import { SallesService } from './salles.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.css']
})
export class sallesComponent implements OnInit {
   
  public salles: salles[];
  public editSalle:salles;
  public deleteSalle:salles;
  

  constructor(private sallesService: SallesService,private router: Router) { }

  goToPage(pageName:string):void
{
  this.router.navigate([`${pageName}` ]);
}

  ngOnInit(){
    this.sallesService.getAllSalle().subscribe(
      (response: salles[]) => {
        console.log(response);
        this.salles = response;
      
      });
  }

   
 public onAddSalle(addForm: NgForm): void {
   
    document.getElementById('add-employee-form').click();
    this.sallesService.addSalle(addForm.value).subscribe(
      (response: salles) => {
        console.log(response);
        this.ngOnInit();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateSalle(id :number,salle: salles): void {
    this.sallesService.updateSalle(id,salle).subscribe(
      (response: salles) => {
        console.log(response);
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteSalle(salleId: number): void {
    this.sallesService.deleteSalle(salleId).subscribe(
      (response:salles[]) => {
        console.log(response);
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchSalle(key: string): void {
    console.log(key);
    const results: salles[] = [];
    for (const salle of this.salles) {
      if (salle.nom.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
      salle.capacite.toString().indexOf(key.toLowerCase()) !== -1) {
        results.push(salle);
      }
    }
    this.salles = results;
    if (results.length === 0 || !key) {
      this.ngOnInit();
    }
  }
  public onOpenModal(salle: salles, mode: string): void {
     
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
     this.editSalle = salle;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      this.deleteSalle= salle;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container.appendChild(button);
    button.click(); 
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



export class salles {
  id: number;
  nom: string;
  capacite: number;
}