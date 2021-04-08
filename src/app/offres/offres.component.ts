import { Component, OnInit } from '@angular/core';
import { Router}from '@angular/router';
import { OffresService } from './offres.service';

@Component({  
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class offresComponent implements OnInit {

  public offres: offres[];

  constructor(private offresService: OffresService,private router:Router) { }

  goToPage(pageName:string):void
{
  this.router.navigate([`${pageName}` ]);
}

  ngOnInit() {
    this.offresService.getAllOffres().subscribe(
      (response: offres[]) => {
        console.log(response);
        this.offres = response;});

  }}
  export class offres {
    id:number;
    libelle: string;
    prix:number;
    specialite:string;
    description:string;
    duree:number;
    datedeb:Date;
    pourcentage_promo:number;
  }


