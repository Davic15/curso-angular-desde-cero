import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent {
  public titulo = 'Componente Empleados';
  public empleado: Empleado;
  public trabajadores: Array<Empleado>;
  public trabajador_externo: boolean;
  public color: string;
  public color_seleccionado: string;

  constructor() {
    this.empleado = new Empleado('David', 25, 'Desarrollador', true);
    this.trabajadores = [
      new Empleado('Roberto', 25, 'Medico', false),
      new Empleado('Maria', 45, 'Cocinera', true),
      new Empleado('Pedro', 50, 'Leñador', false),
    ];
    this.trabajador_externo = false;
    this.color = 'green';
    this.color_seleccionado = '#ccc';
  }

  ngOnInit() {
    console.log(this.empleado);
    console.log(this.trabajadores);
  }

  cambiarExterno(valor: boolean) {
    this.trabajador_externo = valor;
  }

  logColorSeleccionado() {
    console.log(this.color_seleccionado);
  }
}
