// ================================================================ //
//  Seccion donde se cargan los componentes a Usar.
//  Imp. SettingsService: Los servicios de la clase SettingService
//  Imp. Component: Permite hacer uso de las sentencias ng en HTML
//  Imp. Inject: Para poder usar funciones NGFOR
// ================================================================ //
import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/services.index';


@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.html',
  styles: []
})

// ------------------------------------------------------------------- //
// Clase que contiene los seteos seleccionados del Usuario 
// ------------------------------------------------------------------- //
export class AccountSettingComponent implements OnInit {

  // -- contructor: Recupera el ojeto DOCUMENTO que contiene HTML Actua
  //     _document: Objeto que contiene todos el HTML
  //     _ajustes : Objeto que Contiene Class SettingsServices. 
  constructor( public  _ajustes: SettingsService ) { 

  }

  // -- cambiarColor: Cambia el tema segun seleccion 
  //            tema: Tema que se enecuentra en INDEX.HTML 
  //            link: Contiene la linea que selecione                                                            
  cambiarColor(tema: string, link: any) {
    this.aplicarCheck( link );
    this._ajustes.aplicarTema( tema );
  }

  // -- aplicarCheck: Methodo que aplica selecctor al tema elegido     //
  //            link: Contiene la linea que selecione 
  aplicarCheck( link: any ) {
    // Selector todos los elem. que contienen palabra Selector en CLass 
    const selector: any = document.getElementsByClassName('selector');
    let ref: any;
  
    // Saco palabra Woerkin ==> Sacar Selector
    for ( ref of selector) {
      ref.classList.remove('working');
    }
  // Agrego palabra Woerkin ==> Selecciona Tema 
    link.classList.add('working');
  }

  // -- colobarCheck: Methodo que aplica selecctor al tema elegido     //
  //            link: Contiene la linea que selecione 
  colobarCheck( ) { 
    const selector: any = document.getElementsByClassName('selector');
    const tema = this._ajustes.ajustes.tema;

    let ref: any;

    // Saco palabra Woerkin ==> Sacar Selector
    for (  ref of selector) {
     if ( ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
    }
  }

  // -- ngOnInit: Methodo de inicio                                       
  ngOnInit() {
    console.log('carga check');
    this.colobarCheck();
  }

}
