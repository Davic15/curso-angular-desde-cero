import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent {
  title = 'Pagina de contacto de la web';
  public parametro: any;

  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.parametro = params['page'];
    });
  }

  redirigir() {
    this._router.navigate(['/contacto', 'fdma']);
  }

  redirigirDos() {
    this._router.navigate(['/home']);
  }
}
