/**
 * .json,
 * es un lenguaje de texto plano que se utiliza para
 * enviar datos en pares nombre-valor, entre webs o servidores
 * este no soporta comentarios 
 */

const operaciones = require('./operaciones')
console.log(operaciones.suma(1,5));

const datos = require('./user.json');
console.log(datos);