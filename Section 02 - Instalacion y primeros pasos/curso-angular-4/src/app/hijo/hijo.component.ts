import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent {
  public title: string;
  @Input() propiedad_uno: string;
  @Input('texto') propiedad_dos: string;

  @Output() desde_el_hijo = new EventEmitter();

  constructor() {
    this.title = 'Componente hijo';
    this.propiedad_dos = '';
    this.propiedad_uno = '';
  }

  ngOnInit() {
    console.log(this.propiedad_dos);
    console.log(this.propiedad_uno);
  }

  enviar() {
    this.desde_el_hijo.emit({ nombre: 'Franklin Avellan', edad: 35 });
  }
}
