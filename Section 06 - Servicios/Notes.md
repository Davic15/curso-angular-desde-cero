# Section 06 - Servicios

## Crear y utilizar un servicio

    - Los servicios son clases, que nos permiten reutilizar codigo.
    - Separar logica del componente y enviarla a un servicio.
    - Buenos ejemplos son las API request.
    - Serian como los helpers en React.
    - Puede ser:
        - Una carpeta por componente.
        - Una carpeta para todos los servicios.
    - Importar el decorador Injectable.
    - Crear el metodo.
    - Importar en el componente.
    - En la declaracion del Component, agregamos providers, y escribimos nuestro servicio.
    - En el constructor definimos la propiedad con el nombre del servicio, se escribe con un guion bajo adelante.
    - Pueden recibir parametros.
    - Ejemplos: llamadas API, obtener informacion, etc.

## Ejercicios con los servicios.

    -Agregar metodos en el Service.
