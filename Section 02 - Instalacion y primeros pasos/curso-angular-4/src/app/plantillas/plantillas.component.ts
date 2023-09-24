import { Component } from '@angular/core';

@Component({
  selector: 'plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css'],
})
export class PlantillasComponent {
  public titulo;
  public administrador;

  public dato_externo = 'David Macias';
  public identity = {
    id: 1,
    web: 'Davic15.github.io',
    tematica: 'portafolio',
  };

  constructor() {
    this.titulo = 'Plantillas ngTemplate en Angular';
    this.administrador = true;
  }

  cambiar(value: boolean) {
    this.administrador = value;
  }

  recibirDatos(event: Event) {
    console.log(event);
  }
}
