import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// -- SERVICIOS 
import {SettingsService, SharedService, SidebarService } from './services.index'; 

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService, 
    SharedService, 
    SidebarService ],
  declarations: []
})
export class ServiceModule { }
