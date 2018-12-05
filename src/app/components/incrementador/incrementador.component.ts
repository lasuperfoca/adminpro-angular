import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  leyenda: string = 'Titulo';
  
  constructor() { }
  procentaje: number;
  valor: number;

  // -- Funcion De Incremento Bar
  incrementar( valor: number ) {
    if ( valor > ( 100 - this.procentaje ) ) {
      valor = 100 - this.procentaje;
    }

    if ( this.procentaje !== 100) {
      this.procentaje = this.procentaje + valor;
      console.log(this.procentaje); 
    } else { 
      console.log( this.procentaje ); 
    }
    return this.procentaje;
  }

  // -- Funcion De Decremento Bar
  decrementar( valor: number ) {
    if ( valor > this.procentaje ) {
      valor = this.procentaje;
    }
    if ( this.procentaje !== 0) {
      this.procentaje = this.procentaje - valor;
      console.log(this.procentaje); 
    } else { 
    console.log(this.procentaje); 
    } 

    return this.procentaje;
  }

  ngOnInit() {
  }
  

}
