//Arreglo de objetos

//Debés crear una función llamada arregloDeObjetos que reciba un número como parámetro
// y devuelva un arreglo de objetos que tengan una propiedad llamada `valor` 
//que contenga el valor del número y sus anteriores.

//Ejemplo:
//arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor: 5}]
//arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}]

function arregloDeObjetos (numero) {
    let array = [];                         //cuando tengo 1 array vacio, le puedo sumar cosas con un push.
    for (let i = 1; i <= numero; i++) {
        let objeto = {
            valor : i
        }
        array.push(objeto);
    }
    return array;
}

console.log(arregloDeObjetos(5));
