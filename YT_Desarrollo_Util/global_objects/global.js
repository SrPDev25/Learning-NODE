//Datos del sistema
/**
 * Window,
 * es un objeto original o raiz en donde se encuentran el resto de propiedades
 * como console, document, location...
 * node no tiene window ya que esta es una propiedad de los navegadores
 */
//global.console.log(windows);
/**
 * Global,
 * al igual que window en los navegadores 'global' es un objeto principal
 * donde se encuentran muchas pripiedades y funciones, 
 * si al crear una variable no la creamos const, val, var 
 * se auto instanciariá como una variable dentro de 'global'
 */
//global.console.log(global);//Los datos del sistema igual que en un navegador es window

/**
 * Process,
 * es una propiedad de global que proporciona control e información
 * sobre el proceso de ejecución
 */
//process.argv, devuelve una matriz de los directorios de los archivos en ejecución
//console.log(process.argv);

//Kill the current process
//process.exit();

/*process.env, 
devuelve todas las variables del entorno, estas siendo las variables que se encuentran fuera del programa actual
como la dirección de la consola, la cache del sistema, codigos de paths...
*/
//console.log(process.env);


/**
 * CommonJS,
 * es un gestor de modulos, 
 * a diferencia de java, python... lenguajes de orientados a objetos
 * JS de forma nativa no tiene un sistema en el que se pueda dividir 
 * el código entre diferentes archivos .JS, sino que tiene que ejecutarse todo desde un mismo archivo
 * 
 * para solucionar eso CommonJS proporciona una forma de dividir el código en modulos, 
 * y así, tener mejor mantenimineto del programa
 */

/**
 * __filename, es una constante de commonJS que nos dice el archivo actual de "este" modulo
 * __dirname, es una constante de commonJS que nos dice la dirección de "este" módulo
 */
//console.log(__filename,__dirname);

/**
 * El siguiente codigo
 * 1º importa el "modulo" suma
 * 2º llama al metodo suma ya importado en este archivo
 * 
 * tip, cuando se importa, 
 * los metodos fuera de una constante o function dentro de ese modulo, se ejecutan
 */
const {suma} =require('./suma')
console.log(suma(3,2));


//Un timeout, ejecuta un codigo después de un tiempo determinado
/*setTimeout(() => {
    console.log("Han pasado 2 segundos");
    console.log("queso");
}, 2000);
setTimeout(() => 
    console.log("Este va después en código pero antes en tiempo")
, 1000);*/


