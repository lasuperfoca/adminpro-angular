import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PegesComponent } from './peges.component';

// ... Declaro todas las paginas
@NgModule({
  declarations: [
    PegesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
    ],
    exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
    ],
    imports: [
      SharedModule
    ]
})

export class PagesModule {}


