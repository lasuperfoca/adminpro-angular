import { RouterModule, Routes, ChildrenOutletContexts } from '@angular/router';
import { Component } from '@angular/core';
import { PegesComponent } from './pages/peges.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

// --Uso el arreglo  appRoutes para definir las rutas que existen en mi aplicación.
const appRoutes: Routes = [
    {path: '',
        component: PegesComponent,
        children: [
            {path: 'dahboard', component: DashboardComponent },
            {path: 'progress', component: ProgressComponent},
            {path: 'graficas1', component: Graficas1Component},
            {path: '', redirectTo: '/dahboard', pathMatch: 'full'}
        ]
    },
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NopagefoundComponent}
 ];

// --Uso la constante APP_ROUTES para saber en que pages estoy y de cual vengo.
export const APP_ROUTES = RouterModule.forRoot( appRoutes, {useHash: true} );
