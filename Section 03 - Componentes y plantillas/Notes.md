# Section 03 - Componentes y plantillas

## Que es un component y como funciona?

    - Un componente al final va a controlar un troso de pantalla o de la vista. Todo lo que se puede ver en  pantalla es controlado y gestionado por este tipo de elementos.
    - app.component.ts es el componente por defecto, y es el primero que se va a cargar.
        - Import {Component} fron '@angular/core'
            - Esto proporciona un decorador.
            - Los decoradores aportan caracteristicas extra a las clases y condicionan el comportamiento de las mismas dependiendo de los metadatos o propiedades que tengan.
            - Le da una funcionalidad extra a la clase que tenemos abajo.
                - export class AppComponent {
                    //mi codigo
                }
            - selector: 'app-root'
                - Es el nombre del componente a usar.
            - templateUrl: './app.component.html'
                - Es la plantilla HTML, lo que se muestra en nuesta webapp.
            - stylesUrls: ['./app.component.css']
                - Es el archivo de estilos y pueden ser varios por eso es un array.
                - Estos estilos son solo para este component, no son compartidos.
                - Para estilos generales se debe poner en styles.css.
    - Los componentes deben estar cargados en el app.module.ts, para que funcionen.
        - Va en la parte de declarations.

## Creat un componente

    - Hay varias maneras de crear un componente.
    - Hay dos formas de estructurar un proyecto en Angular.
        1) Teniendo una carpeta components, una carpeta view con las plantilas.
        2) Una carpeta por component.
    - Se puede hacer a mano, es decir, hacerlo creando los archivos necesarios y agregarlos a app.module.ts
    - Se puede hacer un template en linea, dentro del archivo fruta.component.ts, pero no es lo optimo, es mejor tener todo separado.
    - Con la interpolacion podemos imprimir nuestras variables en las plantillas de HTML.

    - NgModule Crea un modulo.
        - declarations declara los componentes, pipes, etc de manera global.
        - imports, cargar diferentes modulos del Framework, routes, forms, etc.
        - providers, se cargan servicios.
        - boostrap, se indica el modulo principal a cargar.
