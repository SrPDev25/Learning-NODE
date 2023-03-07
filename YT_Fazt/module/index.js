/* let username = "fazt";
let age = 30;
let hasHobbies = falselet;
let points = [10, 20, 30];
//Se puede annadir un .json como variable
let user = {
  name: "ryan",
  lastname: "jhon",
}; */

//Saludos
/* //Forma antigua de require
const persona=require('./myModule')
//Nueva forma de require, have to use the same name
const {saludo,despedida}=require('./myModule')

//Cuando solo se importa un dato, el objeto representa a ese dato
//Cuando es un conjunto de variables se puede elegir una de ellas
console.log(saludo) */


//Mates, importado uno de mis modulos
const math=require('../math/index')


console.log(math.add(1,2))
