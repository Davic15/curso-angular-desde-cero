# Section 04 - TypeScript dentro de Angular

## Que es TypeScript?

    - 85% JavaScript normal.
    - Nuevas caracteristicas de EcmaScript 6.
    - Tipado fuerte.
    - Orientacion a objetos mejorada.
    - Lenugaje interpretado, (se transpila JS).
    - Extension de los archivos .ts.
    - Superset de JS desarrollado por Microsoft.

## Propiedades y tipos de datos

    - Decorador, es para indicar propiedades basicas y extras a un componente.
    - Propiedades de la clase.
        - public, que puede mostrarse en el HTML.
        - private, solo dentro del archivo de TypeScript, no se puede mostrar en el HTML.
    - Variables y tipos de datos:
        - Se le puede especificar el tipo de dato, pero si se le asigna un tipo de datos, no es necesario.
        - Los Arrays necesitan a mas del tipo de variable que es, requieren el tipo de dato que van a contener.
            - trabajos:Array<string> = ['', ''];
        - Tipo any, puede aceptar cualquier tipo de dato, pero no es optimo ya que se pierde la funcionalidad de TypeScript.
        - String, Number, Boolean, Any, Array.

## El constructor, metodos de un component y NgOnInit

    - Metodo constructor
        - Es el primer metodo que se lanza al instanciar la clase.
        - Cuando ejecutamos una clase, el constructor es el primero en ejecutarse.
        - Asignar el valor a las propiedades.
        - Con la palabra this accedemos a los metodos y eventos definidos en esa clase.
        - Con el contrstructor es mejor asignar las variables.
        - Para definir funciones / metodos, se definen afuera del constructor, y se llaman desde el constructor.
            - No es una buena practica llamar metodos dentro del constructor.
    - ngOnInit
        - Este es el primer metodo en ser ejecutado despues del constructor.
        - Aqui se puede poner las llamadas a los metodos, llamar APIs, etc.

## Diferencias entre let y var

    - El alcance de las variables let, siempre va a estar disponible dentro del bloque en donde se define.
    - El alcance de las variables con var es global.

## Crear clases, modelos de datos y objetos

    - Se puede crear un modelo usando clases, y con ese modelo, se puede definir como tipo de dato.
