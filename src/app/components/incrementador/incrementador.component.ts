// -- Def: Esta clase Importa y exporta datos       -- //
// -- mediante los decoradores Import/Output tambien-- //
// -- Tambien implementa los eventos onChanges para -- //
// -- para detectar cambios en un BOX               -- //

import { Component, Input, Output, ViewChild, OnInit, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
// --------------------------------------------------- //
// --         CLASS INCREMENTADOR                   -- //
// --------------------------------------------------- //
export class IncrementadorComponent implements OnInit {

// @ViewChild: Vincula un elemento de HTML con Typescrip (Similar al document.getElementsByName(nombre) de js)
  @ViewChild('txtProgress') txtProgress: ElementRef;

// @Import: Se usa para poder importar marcadores {} de un HTML
  // tslint:disable-next-line:no-input-rename
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

// @Output: En este caso devuelve un valor al HTML, vinculado a un evento
  // tslint:disable-next-line:no-output-rename
  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onChanges( newValue: number ) {
    if ( newValue >= 100 ) {
      this.progreso = 100;
    } else if ( newValue <= 0 ) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
// -- Si cambia el valor al elemento le pongo el progreso y lo mando al Box
// -- esto lo hace ya que esta como Output, disparando el mismo con el metodo emiter 
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit( this.progreso );
  }

  cambiarValor( valor: number ) {

    if ( this.progreso >= 100 && valor > 0 ) {
      this.progreso = 100;
      return;
    }

    if ( this.progreso <= 0 && valor < 0 ) {
      this.progreso = 0;
      return;
    }
// -- Valida el valor del Box, meidante la clase focus. 
    this.progreso = this.progreso + valor;
    this.cambioValor.emit( this.progreso );
    this.txtProgress.nativeElement.focus();
  }

}
