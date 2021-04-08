import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ArchiveSalleComponent } from './archive_salle/archive_salle.component';
import { ArchiveMaterielComponent } from './archive-materiel/archive-materiel.component';
import {ArchiveExamenComponent} from './archive-examen/archive-examen.component';
const routes: Routes =[
  {
    path: '',
    redirectTo: 'salles',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },{path:'archiveSalle' , component:ArchiveSalleComponent},
  {path:'archiveMateriels',component:ArchiveMaterielComponent},
  {path:'archiveExamen',component:ArchiveExamenComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
