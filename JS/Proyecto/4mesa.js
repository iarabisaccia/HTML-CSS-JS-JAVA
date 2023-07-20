/* Escribir un programa que muestre en pantalla los números del 1 al 100,
sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por
“buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—,
por la palabra “fizzbuzz”. */

function multiplos (numero) {
    for (let index = 1; index < 100; index++) {
        if (index % 3 === 0 && index % 5 === 0) {
            console.log('Fizzbuz');
        }
         else if (index % 5 === 0) {
            console.log('Buzz');
        } else if (index % 3 === 0) {
            console.log('Fizz');
        } else {
            console.log(index);
        }
    }
}

//console.log(multiplos(15));

/* Escriban una función que reciba dos parámetros: un array y un índice. La
función deberá de mostrar por consola el valor del elemento según el
índice dado. Por ejemplo, dada la siguiente array e índice, la función
imprimirá '6'. let array =
[3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; var index = 1; */

/* Escribir una función que, dado un número de mes, devuelva la cantidad
de días de ese mes —suponiendo que no es un año bisiesto—. */

function diasDelMes (numero) {
    for (let index = 1; index <= 30; index++) {
        if (numero % 3 ===0) {
            console.log(index);
        } else if (numero === 2) {
            console.log(index - 2);
        }
        else {
            console.log(index + 1);
        }
    }
}

//console.log(diasDelMes(2));

/* Escribir una función de JavaScript que invierta un número. Por ejemplo,
si x = 32443, la salida debería ser 34423.*/



/*
 * Escriba una función que reciba dos parámetros:
 * una array y un índice. La función mostrar por consola
 * el valor del elemento en la posición dada
 * (basado en uno). Por ejemplo, dado el siguiente
 * array:
 */
 let array = [
	3,
	6,
	67,
	6,
	23,
	11,
	100,
	8,
	93,
	0,
	17,
	24,
	7,
	1,
	33,
	45,
	28,
	33,
	23,
	12,
	99,
	100
];

/**
 * Y el siguiente indice:
 */

let indice = 1;

/**
 * La funcion debera mostrar por consola el numero 6.
 */

// Extra: que pasa si cambias el valor de la variable indice a 10?
// Si tu función esta bien, deberias ver el numero 17 por consola.

// Escribe tu función debajo de esta linea.

function funcion2 (array, indice) {
    for (let index = 0; index < array.length; index++) {
        if (index[x] === indice) {
            console.log(index);
        } 
    }
} 

//console.log(funcion2(array, indice));


// Invoca tu función debajo de esta linea.
