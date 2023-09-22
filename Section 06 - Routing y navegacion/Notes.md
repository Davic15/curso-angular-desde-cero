# Section 06 - Routing y navegacion

## Configurar el routing

    - Revisar en el index.html si existe la etiqueta <base href="/">.
    - Importar los modulos de Angular para trabajar con las rutas, esto lo hacemos en un archivo de routas nuevo.
        - import { ModuleWithProviders } from '@angular/core';
        - import { Routes, RouterModule, Route } from '@angular/router';
    - Importar los componentes a usar.
    - Establecer las rutas dentro de un array de objetos.
    - Exportar las rutas.
    - Agregarlas en el app.module.ts.

## Menu de navegacion

    - Con [routerLink]="['/ruta']"

## Marcar elementos del menu

    - Con la directiva [routerLinkActive]="['activado']" se le puede asignar una clase para indicar que es la ruta que estamos visualizando.

## Rutas y parametros por la url

    - En el fichero de rutas tenemos que agregar las rutas con parametros.
