import { Component } from "@angular/core";

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html',
    styleUrls: ['./fruta.component.css']
})
export class FrutaComponent {
    public nombre_componente = 'Componente Fruta';
    public listado_frutas = 'Naranja, Manzana, pera y Sandia';
    private hola = 'hola mundo'
    public nombre:string;
    public edad:number;
    public mayorDeEdad:boolean;
    public trabajos:Array<string> = ['Carpintero', 'Albañil', 'Fontanero']
    comodin:any;

    constructor() {
        this.nombre = 'David Macias';
        this.edad = 15;
        this.mayorDeEdad = true
        this.comodin = 'Si'
        console.log('constructor')
    }

    cambiarNombre() {
        this.nombre = 'Ariadna Macias'
    }

    cambiarEdad() {
        this.edad = 25
    }
    
    ngOnInit () {
        this.cambiarNombre()
        this.cambiarEdad()
        console.log('ngOnInit')

        // Variables y alcance
        var uno = 8;
        var dos = 15

        if (uno === 8) {
            let uno = 3;
            var dos = 88;
            console.log('dentro if ' + uno)
        }

    }
}