import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
export class Formateur
{
  cin:number
  nom :string
  prenom:string
  password:string
  email:string
  adresse:string
  tel:string
}
