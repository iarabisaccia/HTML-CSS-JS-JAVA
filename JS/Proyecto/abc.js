//Hacer un script que escriba una pirámide de los números del 1 al
//número que indique el usuario de la siguiente forma: (suponiendo que
//indica 6).


function piramide(numero){ //crea funcion piramide y le pasa por parametro un numero
    let matriz = [] //crea array llamado matriz vacio, al que le vamos a pushear los arrays que representan las filas de la piramide
    for (let i = 1; i <= numero; i++) { //i=1?? i <= numero??????
        let fila = [] //crea el array de las filas de la piramide vacio al q le vamos a pushear el resultado, es decir el contenido que va a tener cada fila.
        for (let j = 1; j <= i; j++) { //j=1??? j <=???
            fila.push(i) //aca le pushea el i (contenido) al array de las filas
        }
        matriz.push(fila) //pushea el array de las filas a la matriz.
    }
    return matriz; 
}
//console.log(piramide(6));


/* Escribir una función que
reciba un array con nombres,
y para cada nombre imprima el
mensaje:
Estimado (nombre) , vote por mí. */

let nombres = ["Lucas", "Martin", "Lucrecia", "Gabriela", "Mina", "Javier"];

let numeros = [
	[10, 3, 2, 1, 4, 7],
	[5, 5, 10, 100, 4],
	[5, 125, 10, 1020, 4],
	[5, 5, 5097, 100, 4]
];

/**
 * Suma los valores que sean mayores
 * o iguales a 10, pero menor a 1000.
*/

function sumade10 (array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
       for (let j = 0; j < array[i].length; j++) {
           if (array[j] <= 10 && array[j] > 1000) {
            total = total + matriz[i][j];
           }
       }
    }
    return total;
}

sumade10(numeros);
console.log(numeros);


                                                                                                                                                                                                                                                              




