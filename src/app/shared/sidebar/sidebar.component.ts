import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/services.index';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})

// ------------------------------------------------------------------- //
// Clase que contiene los sericios del Menu
// ------------------------------------------------------------------- //
export class SidebarComponent implements OnInit {

  constructor( public _sidebar: SidebarService) { }

  ngOnInit() {
  }

}
