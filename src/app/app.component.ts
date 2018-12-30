import { Component } from '@angular/core';
import { SettingsService } from './services/setting/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// ------------------------------------------------------------------- //
// Clase Global para todas las Paginas. 
// ------------------------------------------------------------------- //
export class AppComponent {
   // -- constructor: Importa los asjustes del Local Storages 
  constructor( public _ajustes: SettingsService ) { }
}
