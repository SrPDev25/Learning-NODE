const suma=(numA,numB)=>{
    return numA+numB;
};
const resta =(numA,numB)=>{
    return numA-numB;
};
const multiplicacion =(numA,numB)=>{
    return numA*numB;
};


/**Exporta las constantes para su uso
 * Usar siempre module.exports en vez de exports
 * module.exports!= exports
 * esto se debe que al importar en el index coge module.exports
 */
module.exports={suma,resta,multiplicacion}

//Cuando se exporta este .js ejecuta todas las funciones
//console.log(module);