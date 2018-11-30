import { Routes, RouterModule } from '@angular/router';
import { PegesComponent } from './peges.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';


// --Uso el arreglo  appRoutes para definir las rutas que existen en mi aplicación.
const pagesRoutes: Routes = [
    {path: '',
        component: PegesComponent,
        children: [
            {path: 'dahboard', component: DashboardComponent },
            {path: 'progress', component: ProgressComponent},
            {path: 'graficas1', component: Graficas1Component},
            {path: '', redirectTo: '/dahboard', pathMatch: 'full'}
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes ) ;
