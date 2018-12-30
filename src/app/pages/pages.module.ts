// Modulos
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import {SharedModule} from '../shared/shared.module';

// Componentes 
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PegesComponent } from './peges.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

// Paguinas
import { PAGES_ROUTES } from './pages.router';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';

// ...Declaro todas las paginas
@NgModule({
  declarations: [
      PegesComponent,
      DashboardComponent,
      ProgressComponent,
      Graficas1Component,
      GraficoDonaComponent,
      IncrementadorComponent,
      AccountSettingComponent

    ],
    exports: [
      DashboardComponent,
      ProgressComponent,
      Graficas1Component
    ],
    imports: [
      PAGES_ROUTES, // --> Importa una constante que tiene como valor pages.routs.ts
      FormsModule,  // --> Importa ngModule para usar en formularios
      SharedModule,
      ChartsModule
    ]
})

export class PagesModule {}


