//Strings y arrays. 
//A partir de un array de correos, recorrerlo para corroborar si son válidos. Para ello, por el momento, debemos buscar el carácter “@” en cada elemento y agregar aquellos que lo tengan 
//al array de correos admitidos. En caso de no encontrar el carácter, se deberá agregar al array de correos descartados.
//Desarrollar una función que realice la verificación de cada elemento del array de correos pendientes. En caso de validar, agregar al arrayCorreoAdmitidos. Caso contrario, agregar al 
//arrayCorreoDescartados (vaciar el array de correos pendientes).

let arrayCorreosPendientes = [
    'iroman@digitalhouse.com','loki%digitalhouse.com','loki@digitalhouse.com',    'thanosdigitalhouse.com','thanos@digitalhouse.com'];
  /* array de correos admitidos */

let arrayCorreosAdmitidos = [
       'thor@digitalhouse.com',
      'tucuMan@digitalhouse.com',
      'wanda@digitalhouse.com'
];

let arrayCorreosDescartados = [];


function verificarCorreo(array){
    for (let index = 0; index < array.length; index++) {           //si empezas de 0 vas a hacer uno de mas. 
        if (array[index].indexOf('@') != -1) {                    //index significa índice. muestra en que posicion del array esta un caracter que estoy buscando. // Si el array en la posicion tiene @.
        arrayCorreosAdmitidos.push (array[index]);
        } else {
        arrayCorreosDescartados.push (array[index]); 
    } 
}
}

verificarCorreo(arrayCorreosPendientes);

console.log("--- Array de correos admitidos: " + "longitud de array" + " ---" + arrayCorreosAdmitidos.length); //devuelve la cant de elementos de correos admitidos que tiene ese array.
console.log(arrayCorreosAdmitidos);


console.log("---Array de correos Descartados:"+  "longitud de array" + " ---" + arrayCorreosDescartados.length); //devuelve la cant de elementos de correos descartados que tiene ese array.
console.log(arrayCorreosDescartados); 