/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */
/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */

let matriz = [
    [1, 2, 3, 4, 5],
    [12, 22, 33, 44, 55],
    [13, 23, 34, 45, 56],
    [14, 24, 35, 46, 57],
    [15, 25, 36, 47, 58],
]

function recorrido (params) { //para recorrer en diagonal
    let totaldiagonal = 0; //acumulador
    for (let index = 0; index < params.length; index++) {
       totaldiagonal = totaldiagonal + params[index][index]; //el 2do index representa la columna(vertical).
    }
    return totaldiagonal;
}


//console.log(recorrido(matriz));

function recorrido1(params) { //recorrer en diagonal invertida
        let aux = params[0].length - 1; //auxiliar empieza desde la posicion 0.length - 1 para indicarle que va a ser de derecha a izquierda
      
        for (let f = 0; f < params.length; f++) {
            for (let c = params[f].length - 1; c >= 0; c--) {
            if (aux === c) { //si el aux es igual a la columna (vertical) consoleame:
               console.log(params[f][c]); 
                }
            }
            aux = aux - 1; 
        }
}
recorrido1(matriz);
//console.log(recorrido1(matriz5x5));
    
//OTRA FORMA MAS FACIL
    
function recorrido2(params){
    let total = 0; 
    let aux = params[0].length - 1; 
    
    for (let i = 0; i < params.length; i++) {
        total = total + params[i][aux];
        aux--;
    }
    return total
}   
//console.log(recorrido2(matriz));



function sumaTotal (array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
       for (let j = 0; j < array[i].length; j++) {
           total = total + matriz[i][j];
       }
    }
    return total;
}

sumaTotal(matriz);
//console.log(matriz);


let matriz2 = []

 function crear(matriz, longitud) { //pasa x parametro la matriz y su longitud
     let valor = 0; //crea var para almacenar
   for (let i = 0; i < longitud ; i++) {
         let elementos =[] //crea la var elementos q va a tener 1 array vacio en donde vamos a pushear los valores
     for (let j = 0; j < longitud; j++) {
         valor = valor + 5;  //va de 5 en 5
         elementos.push(valor);  //incluye a los valores en el array
     }
     matriz.push(elementos); //incluye el array a la matriz
   }
}
crear(matriz2, 6); //pasa como valor la matriz y la cantidad de filas y columnas q quiero tener dentro de la matriz 
//console.log(matriz2);



/* para pushear una matriz cuadrada diferente filas y columnas */

let matriz3 = []

 function crear(matriz, fila, col) {
    let valor = 0; //crea var para almacenar

   for (let i = 0; i < fila ; i++) {

         let elementos =[] //crea el array elementos para desp pushearle los valores

     for (let j = 0; j < col; j++) {
         valor = valor + 5; //los valores van de 5 en 5

         elementos.push(valor);  //ingresan los valores al array elementos
     }
     matriz.push(elementos); //ingresa el array elementos a la matriz
   }
}
crear(matriz3, 6, 3); //6 columnas y 3 filas
//console.log(matriz3);

