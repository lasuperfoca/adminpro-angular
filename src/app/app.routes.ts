// --Importacion Librerias
import { RouterModule, Routes, ChildrenOutletContexts } from '@angular/router';
import { Component } from '@angular/core';

// --Importacion de Paginas
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

// --Uso el arreglo  appRoutes para definir las rutas que existen en mi aplicación.
const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NopagefoundComponent}
];

// --Uso la constante APP_ROUTES para saber en que pages estoy y de cual vengo.
export const APP_ROUTES = RouterModule.forRoot( appRoutes, {useHash: true} );
