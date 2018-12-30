// ================================================================ //
//  Seccion donde se cargan los componentes a Usar.
//  Imp. Rotes: componente usado para poder Navegar
//  Imp. Component: Permite hacer uso de las sentencias ng en HTML
// ================================================================ //
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function init_plugin();


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// ================================================================ //
//  LoginComponent: Clase que maneja el acceso al Sitio
// ================================================================ //
export class LoginComponent implements OnInit {

// ..constructor: Clase contructora
  constructor( public router: Router) { }

// ..ingresar: Valida y da acceso a la pagina   
  ingresar() { 
    console.log('Ingreso...'); 
    this.router.navigate(['/dahboard']);
}

// ..ngOnInit: Dar formato al iniciar la pagina   
  ngOnInit() {
    init_plugin();
  }
}
