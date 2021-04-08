import { Component, OnInit } from '@angular/core';
import { ArchiveService } from './archive.service';


@Component({
  selector: 'app-archive_salle',
  templateUrl: './archive_salle.component.html',
  styleUrls: ['./archive_salle.component.css']
})
export class ArchiveSalleComponent implements OnInit {
 
  public salles: salles[];

  constructor(private sallesService: ArchiveService) { }
  ngOnInit(){
    this.sallesService.getAllSalle().subscribe(
      (response: salles[]) => {
        console.log(response);
        this.salles = response;
      
      });
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
  
}



export class salles {
  id: number;
  nom: string;
  capacite: number;
}

