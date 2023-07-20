/**
* Escribir una función que
*  reciba un array de elementos
* e indique si se encuentran ordenados
*  de menor a mayor o no.
*
* La función debe retornar un booleano: true si el array esta ordenado, false, si no.
* */


let pruebaA = [4, 3, 1, 7, 9, 0, 4, 2];
let pruebaB = [1, 2, 3, 4, 5, 6, 7, 8];


// Comprueba tu función con los 2 arrays en dos llamadas independientes


/**
* Escribir una función que
*  reciba un array con nombres,
*  y para cada nombre imprima el
*  mensaje:
*  Estimado (nombre) , vote por mí.
*/

let nombres = ["Lucas", "Martin", "Lucrecia", "Gabriela", "Mina", "Javier"];

function agregarMensaje (array) {
    for (let i = 0; i < array.length; i++) {
      console.log('Estimado ' + array[i] + 'vote por mí.');
    }
}
console.log(agregarMensaje(nombres));

/**
* Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario de la siguiente forma : (suponiendo que indica 6). 
666666 
55555 
4444 
333 
22 

*/




/**
* Teniendo 3 arrays:
fila1 = [4,9,2]
fila2 = [3,5,7]
fila3 = [8,1,6]
Cargarlos en una matriz y luego,
hacer la suma de los valores horizontales de cada fila, los verticales de cada columna y las 2 diagonales, e imprimirlas por consola.

*/

//Armo una función cuadrada 5x5 con enteros positivos.
let matriz = [
    [8, 1, 1, 1, 1],
    [2, 2, 2, 2, 2], 
    [8, 4, 3, 9, 8], 
    [8, 4, 6, 9, 8], 
    [5, 9, 6, 9, 4]
]

function sumarMatriz(matrizP){
    let sumaTotal = 0;
    for (let i = 0; i < matrizP.length; i++) {
        for (let j = 0; j < matrizP[i].length; j++) {
            sumaTotal = sumaTotal + matrizP[i][j];
        }
        return sumaTotal;
    }
};
//console.log(sumarMatriz(matriz));

// Sumo cada fila, y luego hago que el rdo sea cada un elemento dentro de un nuevo array.
function sumarFila(matrizP){
    let totalPorFilas = []; //arma el array en el que vamos a pushear el resultado de la suma de cada fila como un elemento.
    for (let i = 0; i < matrizP.length; i++) {
        let sumaFila = 0; //acumulador
        for (let j = 0; j < matrizP[i].length; j++) {
            sumaFila = sumaFila + matrizP[i][j]; //la suma de las filas
        }
        totalPorFilas.push(sumaFila); //pushea la suma al array totalPorFilas
    }
    return totalPorFilas;
}
//console.log(sumarFila(matriz)); 

// Dame el resultado de la suma de la fila en la posición "fila"
//te muestra un único resultado de la suma de la fila q vos le pases en el console.log
function sumarLaFila(fila, matrizP){
    let sumaFila = 0;
    for (let j = 0; j < matrizP[fila].length; j++) {
        sumaFila = sumaFila + matrizP[fila - 1][j];  //le hagol el 1- aca porque si el usuario indica la semana 3, él no sabrá que la función debe arroja la posición 2. 
                                                    //(arranca de cero). O bien podría dejar la variable en vez de cero en -1. En este caso digamos que no uso prompt.
    }
    return sumaFila;
}
console.log(sumarLaFila(1, matriz));

//Mostrame la Diagonal de la matriz
function mostrarDiagonal(matrizP){
    for (let i = 0; i < matrizP.length; i++) {
        //return matrizP[i][i]; //NO SE PUEDE HACER CON RETURN
        console.log(matrizP[i][i]);             //con el [i][i] agarro la diagonal
    } 
}
    
//mostrarDiagonal(matriz);

//Sumar la diagonal de la matriz
function sumarDiagonal(matrizP){
    let sumaDiagona1 = 0; //acumulador
    for (let i = 0; i < matrizP.length; i++) {
        sumaDiagonal = sumaDiagona1 + matrizP[i][i]; //matrizP[i][i] para que recorra en diagonal 
    }
    return sumaDiagona1;
}    
//console.log(sumarDiagonal(matriz));


//Sumar la diagonal de la matriz al reves (o sea desde la punta derecha de arriba hasta el extremo izquierdo inferior)
//console.table(matriz);
//console.log(matriz[0][matriz.length -1]);       //me muestra el primer elemento de la diagonal inversa.
//console.log(matriz[1][matriz.length -2]);       //anteultimo
//console.log(matriz[2][matriz.length -3]);       //tercero de izquierda a derecha
//console.log(matriz[3][matriz.length -4]);
//console.log(matriz[4][matriz.length -5]);       // que reste cinco (-5), entonces sería -1 - i


//Para sumar cruzado (o sea como una cruz)
function sumarDiagonal(matrizP){
    let sumaDiagona1 = 0;
    
    let sumaDiagona2 = 0;
    for (let i = 0; i < matrizP.length; i++) {
        sumaDiagona1 = sumaDiagona1 + matrizP[i][i]; //para sumar en diagonal de la punta izquierda de arriba a la puta derecja derecha de abajo
        sumaDiagona2 = sumaDiagona2 + matrizP[i][(matriz.length -1) -i]; //para sumar en diagonal de la punta derecha de arriba a la punta izquierda de abajo 
    }
    return [sumaDiagona1, sumaDiagona2];
}    
//console.log(sumarDiagonal(matriz));

