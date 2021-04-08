import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { salles } from 'app/salles/salles.component';
import { ArchiveService } from './archive.service';

@Component({
  selector: 'app-archive-materiel',
  templateUrl: './archive-materiel.component.html',
  styleUrls: ['./archive-materiel.component.css']
})
export class ArchiveMaterielComponent implements OnInit {

  materiels: Materiel[];
  salles: salles[];

  constructor(private archiveMateriel: ArchiveService) { }

  
  ngOnInit() :void {
    this.archiveMateriel.getAllMaterials().subscribe((data: Materiel[]) => {
        console.log(data);
        this.materiels=data;
      });

     this.getMateriel();
    

  }

  public getMateriel(): void {
    this.archiveMateriel.getAllSalle().subscribe((data: salles[]) => {
      console.log(data);
      this.salles=data;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
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
}


export class Materiel {
  reference: string;
  nom: string;
  etat: string;
  salle: salles;
  }
