//Imporatamos el modulo de js path
const path= require('path')

//Adapta la ruta al sistema operativo
const rightPath=path.join('/public','dist','/styles','main.css')

//Obtiene la base de la ruta
const base=path.basename(rightPath)

console.log(base)