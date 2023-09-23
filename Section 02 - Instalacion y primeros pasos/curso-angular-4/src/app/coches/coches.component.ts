import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css'],
  providers: [PeticionesService],
})
export class CochesComponents {
  public coche: Coche;
  public coches: Array<Coche>;
  public articulos: any;

  constructor(private _peticionesService: PeticionesService) {
    this.coche = new Coche('', '', '');
    this.coches = [
      new Coche('Ferrari', '120', 'Rojo'),
      new Coche('Ashton Martin', '120', 'Negro'),
    ];
  }

  ngOnInit() {
    this._peticionesService.getArticulos().subscribe(
      (result) => {
        console.log(result);
        this.articulos = result;
        if (!this.articulos) {
          console.log('Error en el servidor');
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    this.coches.push(this.coche);
    this.coche = new Coche('', '', '');
  }
}
