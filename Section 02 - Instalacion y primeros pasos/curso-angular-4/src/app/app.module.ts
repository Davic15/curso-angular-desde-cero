import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';

import { routing, appRoutingProvider } from './app.routing';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';

import { ConversorPipe } from './pipes/conversor.pipe';
import { CochesComponents } from './coches/coches.component';
import { PlantillasComponent } from './plantillas/plantillas.component';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent,
    CochesComponents,
    PlantillasComponent,

    ConversorPipe,
  ],
  imports: [BrowserModule, FormsModule, routing, HttpClientModule],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
