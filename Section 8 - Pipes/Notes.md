# Section 8 - Pipes

## Introduccion a las pipes y filtros

    - Los pipes son pequeñas funciones para hacer una tarea en nuesta plantilla.
    - Por ejemplo: transformar fecha, manipular texto, procesar informacion, etc.

## Pipes para fechas

    - Las pipes se usan con el simbolo |.
    - Angular trae pipes por defecto.
    - Pipes para fechas, ejemplo:
        - <p>{{ fecha | date : "dd/MM/yyyy" }}</p>.

## Filtros para transformar caracteres

    - Las pipes se pueden usar en texto tambien y se pueden concatenar.
    - <p>{{ fecha | date : "fullDate" | uppercase | lowercase }}</p>

## Pipes personalizadas

    - Se deben hacer en un archivo diferente, importar los decorados de los Pipes, y agregarlos al archivo app.module.ts.
    - Para enviar parametros {{ 5 | conversor: 7}}
        - 5 es el primer parametro y 7 es el segundo parametro.
