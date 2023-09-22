# Section 05 - Directivas, Binding y Eventos

## Que es una directiva

    - Son funciones o funcionalidades que se usan en las vistas (en el HTML).
    - Son nativas de Angular.
    - Es un funcionalidad en forma de atributo en el HTML.

## Directiva ngIf y evento click

    - ngIf es una condicion en una vista.
    - Los eventos van asi:
        - (click)="myEvento()"

## Directiva ngFor

    - Este es in bucle For, para arrays.

## Directiva ngSwitch y ngStyle

    - Esta es una estructura switch similar a lenguaje C.
    - Se escribe como un atributo en HTML, directiva de atributo.
    - Para comprar string se pone "'myString'".
    - Para darle estilos podemos usar la directiva de atributo ngStyle, podemos escribirlo como en CSS background-color, o como en JavaScript backgroundColor.

## Two way data-binding

    - Cuando se cambia algo en un componente, se cambia en la vista tambien.
    - Se emplea la directiva [(ngModel)]="variable".

## ngStyle en atributo

    - [style.border]="variable + condicion".
        - Atributo style, propiedad css border y la condicion.

## ngClass en atributo

    - [class.myClase]="variable + condicion".
        - Atributo class, mi nombre de clase y la condicion.

## Directiva ngClass

    - Se puede usar la directiva ngClass, se pueden poner mas clases y condiciones.
    - [ngClass]="{clase: variable + condicion}"
