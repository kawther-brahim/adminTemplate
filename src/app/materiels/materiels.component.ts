import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { salles } from 'app/salles/salles.component';
import { MaterielsService } from './materiels.service';

declare var $: any;

@Component({
  selector: 'app-materiels',
  templateUrl: './materiels.component.html',
  styleUrls: ['./materiels.component.css']
})
export class materielsComponent implements OnInit {
  
  materiels: Materiel[];
  salles: salles[];
  MaterielForm =new FormGroup({
    reference: new FormControl(),
    nom: new FormControl(),
    etat: new FormControl()
});

MaterielForm1 = new FormGroup({
  reference: new FormControl(),
  nom: new FormControl(),
  etat: new FormControl(),
  salle: new FormGroup({
    id: new FormControl()
  })
});


  deleteMateriel:Materiel;
  updateMateriel:Materiel;
  constructor(private materielService: MaterielsService,private router:Router) { }


  goToPage(pageName:string):void
{
  this.router.navigate([`${pageName}` ]);
}

  ngOnInit() :void {
    this.materielService.getAllMaterials().subscribe((data: Materiel[]) => {
        console.log(data);
        this.materiels=data;
      });

     this.getMateriel();
    

  }

  public getMateriel(): void {
    this.materielService.getAllSalle().subscribe((data: salles[]) => {
      console.log(data);
      this.salles=data;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}


public onAddMateriel(id:number): void{
  document.getElementById('add-Materiel').click();

  this.materielService.addMateriel(id,this.MaterielForm.value).subscribe(
    (response: Materiel) => {
      console.log(response);
     
      this.ngOnInit();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}

public onUpdateMateriel(id:string,idsalle:number): void{      
  +this.MaterielForm1.get('salle').get('id').setValue(idsalle);
  this.materielService.updateMateriel(id,this.MaterielForm1.value).subscribe(
    (response:Materiel) => {
      console.log(response);
      
      this.ngOnInit();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
      console.log(this.MaterielForm1.value);
      console.log(+this.MaterielForm1.get('salle').get('id').value);
      console.log(idsalle);
    }


  );
}

public onDeleteMateriel(id: string): void {
  this.materielService.deleteMateriel(id).subscribe(
    (response: Materiel[]) => {
      console.log(response);
      this.ngOnInit();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}


public onOpenModal(materiel: Materiel, mode: string): void {
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');
  if (mode === 'add') {
    button.setAttribute('data-target', '#addMateriel');
  }

  if (mode === 'update'){
    this.updateMateriel=materiel;
    button.setAttribute('data-target','#updateMateriel');
  }
  if (mode === 'delete') {
    this.deleteMateriel=materiel;
    button.setAttribute('data-target', '#deleteMateriel');
  }
  container.appendChild(button);
  button.click();
}


public searchMateriel(key: string): void {
  console.log(key);
  const results: Materiel[] = [];
  for (const mat of this.materiels) {
    if (mat.nom.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        mat.reference.toLowerCase().indexOf(key.toLowerCase()) !== -1||
        mat.etat.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
      results.push(mat);
    }
  }
  this.materiels = results;
  if (results.length === 0 || !key) {
    this.ngOnInit();
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


export class Materiel {
reference: string;
nom: string;
etat: string;
salle: salles;
}

