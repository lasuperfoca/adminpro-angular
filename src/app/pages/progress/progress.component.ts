import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  procentaje: number;
  
  constructor() { this.procentaje = 50; }
  ngOnInit() {
  }

}
