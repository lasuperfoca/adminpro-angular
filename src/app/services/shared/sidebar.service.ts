import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// ------------------------------------------------------------------- //
// Clase que contiene los sericios del Menu
// ------------------------------------------------------------------- //
export class SidebarService {

  // -- Objeto Menu  
obMenu: any = {
  titulo: 'Principal',
  icono:  'mdi mdi-gauge',
  submenu: [
    { titulo: 'Dashboard',   url: '/dahboard'},
    { titulo: 'ProgresBar',  url: '/progress'},
    { titulo: 'Graficas',    url: '/graficas1'}
  ]
 };  

// Array de Objetos Menu
menu = [this.obMenu];

  constructor() { }
}
