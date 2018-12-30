// ================================================================ //
//  Seccion donde se cargan los componentes a Usar.
//  Imp. Component: Permite hacer uso de las sentencias ng en HTML
// ================================================================ //
import { Component, OnInit } from '@angular/core';

declare function init_plugin();

@Component({
  selector: 'app-peges',
  templateUrl: './peges.component.html',
  styles: []
})

// ------------------------------------------------------------------- //
// Clase Global de paginas 
// ------------------------------------------------------------------- //
export class PegesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugin();
  }
}
