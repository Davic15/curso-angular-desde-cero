import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RopaService],
})
export class HomeComponent {
  title = 'Pagina Principal';
  public listado_ropa: Array<string>;
  public prenda_a_guardar: string;

  constructor(private _ropaService: RopaService) {
    this.listado_ropa = [];
    this.prenda_a_guardar = '';
  }

  ngOnInit() {
    this.listado_ropa = this._ropaService.getRopa();
    console.log(this._ropaService.prueba('Camisa Nike'));
  }

  guardarPrenda() {
    this._ropaService.addRopa(this.prenda_a_guardar);
    this.prenda_a_guardar = '';
  }

  eliminarPrenda(index: number) {
    this._ropaService.deleteRopa(index);
  }
}
