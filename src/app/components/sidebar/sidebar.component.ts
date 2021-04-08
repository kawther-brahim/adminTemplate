import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
declare interface RoutesInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
declare interface RoutesInfos {
  path: string;
  title: string;
  icon: string;
  class: string;
}

declare interface RoutInfos {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'dashboard',  icon: 'home', class: '' },
    { path: '/user_profile', title: 'profile ',  icon:'person', class: '' },
    { path: '/formations', title: 'Gestion des formations',  icon:'content_paste', class: '' },
    { path: '/examens', title: 'Examens',  icon:'library_books', class: '' },
    { path: '/offres', title: 'Gestion des offres',  icon:'view_list', class: '' },
    { path: '/salles', title: 'Gestion des salles',  icon:'living', class: '' },
    { path: '/utilisateurs', title: 'Gestion des utilisateurs',  icon:'groups', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/deconnexion', title: 'deconnexion',  icon:'logout', class: '' },
  
];


export const materiel: RoutesInfo[] = [
  { path: '/materiels', title: 'materiels',  icon: '', class: '' },

];

export const EXAMENS: RoutesInfos[] = [
  { path: '/examens', title: 'Gestion Des Examens',  icon:'library_books', class: '' },  
];

export const DEMANDES: RoutInfos[] = [
  { path: '/demandes', title: 'Gestion des Demandes Clients',  icon:'library_books', class: '' },  
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public show:boolean = false;

  public buttonName:any = 'Show';

  public show1:boolean = false;

  public buttonName1:any = 'Show';

  menuItems: any[];
  menu : any[];
  menuE : any[];
  menuD : any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.menu = materiel.filter(mat => mat);
    this.menuE=EXAMENS.filter(exams=>exams);
    this.menuD=DEMANDES.filter(demande=>demande);
  
  } isMobileMenu() {
    if ($(window).width() > 991) {
        return false;
    }
    return true;
};

toggle() {
  this.show = !this.show;

  // CHANGE THE NAME OF THE BUTTON.
  if(this.show)  
    this.buttonName = "Hide";
  else
    this.buttonName = "Show";
}

toggle1() {
this.show1 = !this.show1;

// CHANGE THE NAME OF THE BUTTON.
if(this.show1)  
  this.buttonName1= "Hide";
else
  this.buttonName1= "Show";
}
}
