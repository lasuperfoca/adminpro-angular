// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// --RUTAS --//
import {APP_ROUTES} from './app.routes';

// -- SERVICIOS -- //
import { ServiceModule } from './services/service.module';

// --MODULOS --//
// --Organizo mi app Module segun los tipos he importo --//
import {PagesModule} from './pages/pages.module';

// --COMPONENTES --//
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    PagesModule,
    FormsModule,
    APP_ROUTES
  ],
  providers: [ServiceModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
