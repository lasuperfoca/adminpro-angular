import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

interface Ajustes {
  temaUrs: string;
  tema: string;
}

@Injectable({
  providedIn: 'root'
})

// ------------------------------------------------------------------- //
// Clase que contiene los seteos por defecto seleccionados por el 
// usuario. 
// ------------------------------------------------------------------- //
export class SettingsService {
  // ...Locales   
  ajustes: Ajustes = {  
    temaUrs: 'assets/css/colors/default.css',
    tema: 'default'
  };

  // -- Constructor  
  constructor(@Inject(DOCUMENT) private _document ) { 
    this.cargarAjuste(); 
  } 

  // --guardarAjuste: Guarda a justes de forma local como String 
  guardarAjuste() {
    // Uso pars de JSON para convertir Ajustes --> String para Local Storages
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes ));
    console.log('guardo en Storages');
  }

   // --cargarAjuste: Recupera el String ajustes del Local Storages  
  cargarAjuste() {
    if (localStorage.getItem('ajustes') ) {
    // Uso pars de JSON para convertir String --> Ajustes
      this.ajustes = JSON.parse( localStorage.getItem('ajustes') );
      this.cargarTema( this.ajustes.tema);
      console.log('Cargo en Storages');
    
    } else {
      console.log('valores pro defecto');  
    }
  }

cargarTema( tema: string) {
  const url: string = `assets/css/colors/${tema}.css`;
  this._document.getElementById('tema').setAttribute('href', url);
  // Guardar ajustes...
  this.ajustes.tema = tema;
  this.ajustes.temaUrs = url;
}

  // --aplicarTema: Aplicar tema del Local Storages 
  //          tema: Tema a cargar 
  aplicarTema( tema: string) {
    this.cargarTema(tema); 
    this.guardarAjuste();
   }
 


}
