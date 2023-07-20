

// let arrayCuentas = [
//     {
//        nroCuenta: 5486273622,
//         tipoDeCuenta: "Cuenta Corriente",
//         saldoEnPesos: 27771,
//       titularCuenta: "Abigael Natte",
//     },
//     {
//       nroCuenta: 1183971869,
//       tipoDeCuenta: "Caja de Ahorro",
//       saldoEnPesos: 8675,
//       titularCuenta: "Ramon Connell",
//     },
//     {
//       nroCuenta: 9582019689,
//       tipoDeCuenta: "Caja de Ahorro",
//       saldoEnPesos: 27363,
//       titularCuenta: "Jarret Lafuente",
//     },
//     {
//       nroCuenta: 1761924656,
//       tipoDeCuenta: "Cuenta Corriente",
//       saldoEnPesos: 32415,
//       titularCuenta: "Ansel Ardley",
//     },
//     {
//         nroCuenta: 7401971607,
//         tipoDeCuenta: "Cuenta Unica",
//         saldoEnPesos: 18789,
//         titularCuenta: "Jacki Shurmer",
//     },
// ];


// let banco = 
// {
//     clientes : arrayCuentas,
//     consultarCliente : function (titular) {
        
//         let encontrado ;

//         for (let i = 0; i < this.clientes.length; i++) { 
            
//             if (this.clientes[i].titularCuenta === titular) {
//                 encontrado = this.clientes[i]  
//             }
//         }
//         return encontrado; 
//     },

//     // Crear otro método llamado depósito que recibirá dos parámetros: el titular de
//     // cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
//     // correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
//     // Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
//     // nuevo saldo es: XXXX”.


//     deposito : function (titular, cantidad) {
    
//         for (let i = 0; i < this.clientes.length; i++) {
    
//             if (this.clientes[i].titularCuenta === titular) {
    
//                 this.clientes[i].saldoEnPesos = this.clientes[i].saldoEnPesos + cantidad;
    
//                 return `Depósito realizado, su nuevo saldo es: ${this.clientes[i].saldoEnPesos} `
//             }                     
//         }       
//     }, 

//     // console.log(banco.deposito('Jacki Shurmer', 5000)); // este es de pertenece a deposito


//     // **************TERCERA PARTE************
//     // Crear un último método llamado extracción que recibirá también dos parámetros:
//     // el titular de cuenta y el monto a extraer. El método debe obtener la cuenta
//     // correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
//     // menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”.
//     // De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo
//     // saldo es: XXXX”.

//     extraccion : function (titular, montoExtraer) {

//         for (let i = 0; i < this.clientes.length; i++) {
            
//             if (this.clientes[i].titularCuenta === titular) {

//                 let resultado = this.clientes[i].saldoEnPesos = this.clientes[i].saldoEnPesos - montoExtraer;
                
//                 if (resultado < 0 ) {
//                      console.log( 'Fondos insuficientes');
                
//                 }else{
//                         console.log(`Extracción realizada correctamente, su nuevo saldo es: ${this.clientes[i].saldoEnPesos}`);
//                 }     
//             }  
//         }

//     }
// }
//     // banco.extraccion('Jacki Shurmer', 20000 );  
//     // banco.extraccion('Jacki Shurmer', 5000 );  

// // ***********************************************************************************************************



// //     Ejercicio 1
// // En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
// // likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
// // los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
// // obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
// // que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.


// let arrayLikes = [10,12,16,10,9,5,14,18,20,25,3,35,99,29,17];

// function ordenador(array) {

//     for (let i = 0; i < array.length; i++) {
//       for (let j = 0; j < array.length - 1; j++) {

//      // los primeros valores de:
//  //array[j] = 10 array[j +1] = 12
//         if (array[j] < array[j + 1]) {
//             let aux = array[j + 1]; // ((((estoy guardaddo a 12)))))
//                 array[j + 1] = array [j] //paso el 10 a la pososion 12
//                 // 12       10    reasigno el valor 
//                 array[j] = aux; 
//                 //  16     12
//         }                    
//       }
        
//     }
//     return `El ganador: ${array[0]}. 
//     Segundo: ${array[1]}.
//     Tercero: ${array[2]}.
//     Ultimo: ${array[14]}`;
// }
// console.log(ordenador(arrayLikes));


// **********************************************************************************


// El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
// objeto temperatura donde registra día —valor numérico del día—, mes —valor
// numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
// día. Las temperaturas —objeto temperatura— están cargados en un array.



// a) Ordenar por temperatura mínima de menor a mayor.


let arrayTemp =
[
{
    dia : 3,
    mes : 5,
    temperaturaMax : 32,
    temperaturaMin : 20,
},
{
    dia : 4,
    mes : 6,
    temperaturaMax : 30,
    temperaturaMin : 10,
},
{
    dia : 1,
    mes : 2,
    temperaturaMax : 32,
    temperaturaMin : 15,
},
{
    dia : 8,
    mes : 10,
    temperaturaMax : 31,
    temperaturaMin : 30,
}
]
function ordenarMin(array) {

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length -1; j++) {
           if (array[j].temperaturaMin > array[j + 1].temperaturaMin) {

              let temporal = array[j];
              array[j] = array[j + 1];
              array[j + 1] = temporal;
           }
        }
        
    }
    return array;
}
        // console.log(ordenarMin(arrayTemp));

// b) Ordenar por temperatura máxima de mayor a menor.

function ordenarMax(array) {

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length -1; j++) {
           
            if (array[j].temperaturaMax < array[j + 1].temperaturaMax) {
            let temporal = array[j];
              array[j] = array[j + 1];
              array[j + 1] = temporal;
           }
        }
        
    }
    return array;
}

// console.log(ordenarMax(arrayTemp));


// *********************************************************************************
// Escribir una función que
//  *  reciba un array de elementos
//  * e indique si se encuentran ordenados
//  *  de menor a mayor o no.
//  * La función debe retornar un booleano: true si el array esta ordenado, false, si no.

// Comprueba tu función con los 2 arrays en dos llamadas independientes

let pruebaA = [4, 3, 1, 7, 9, 0, 4, 2];
let pruebaB = [1, 2, 3, 4, 5, 6, 7, 8];

function ordArray(array) {

    for (let i = 0; i < array.length; i++) {
       for (let j = 0; j < array.length - 1; j++) {
        
        if (array[j] > array[j + 1]) {
            return false;
        }else{
            return true;
        }
       }       
    }  
}
// console.log(ordArray(pruebaA));
// console.log(ordArray(pruebaB));


// *************************************************************************************************************

// ARRAY

// Escribir una función que reciba un array con nombres, y para cada nombre imprima el mensaje:  Estimado (nombre) , vote por mí.

let nombres = ["Lucas", "Martin", "Lucrecia", "Gabriela", "Mina", "Javier"];

function mensaje(array) {

    for (let i = 0; i < array.length; i++) {
        console.log(`Estimado ${array[i]}, vote por mi.`);   
    } 
}
// mensaje(nombres);



// ************************************************************************************


// * Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario de la siguiente forma : (suponiendo que indica 6). 
// 666666 
// 55555 
// 4444 
// 333 
// 22
// 1


function piramideI(numero) {  // creamos una funcion

    let matrizFinal = []; // esta variable es la matriz vacia, va a recibir todos los valores por medio de un push
    let aux = numero;     // variable auxiliar indica  el elemento que vamos a agregar y el tope de segundo for
    
    for (let i = 0; i < numero; i++) { 

        let array = [];     // esta es la que guarda las filas de la matriz

            for (let j = 1; j <= aux ; j++) {

                array.push(aux) ;  // esta sumando un elemento a las filas

            }
        aux = aux - 1;          // le resta 1 a la variable que representa el elementoa que va a la matriz y el tope del for
        matrizFinal.push(array);   // le agrega las fila a la matriz final
    }
    return matrizFinal; 
}
// console.table(piramideI(6));

// ***************************************************************************


/**
 * Teniendo 3 arrays:
 Cargarlos en una matriz y luego, hacer la suma de los valores horizontales de cada fila, los verticales de cada columna y las 2 diagonales, e imprimirlas por consola.
 
 */


let matrizVacia= [];
//       0 1 2
fila1 = [4,9,2]
fila2 = [3,5,7]
fila3 = [8,1,7];

matrizVacia.push(fila1, fila2, fila3);

// console.log(matrizVacia);


function sumaHorizontal(array, fila) {
    
    let acumulador = 0;
    
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
          if (i == fila - 1) {
              acumulador = acumulador + array[i][j]
          }
        }
    }
    return acumulador;
}
// console.log(sumaHorizontal(matrizVacia, 3));


function sumaVertical(array, col) {
    
    let acumulador = 0;
    
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
          if (j == col - 1) {
              acumulador = acumulador + array[i][j]
          }
        }
    }
    return acumulador;
}
// console.log(sumaVertical(matrizVacia, 3));



function sumaDiagonal(array) {

    let diagonal1 = 0;
    let diagonal2 = 0;
        
    for (let i = 0; i < array.length; i++) {
       diagonal1 += array[i][i];
       diagonal2 += array[i][array.length -( i + 1)] //array.length resta al resultado de i + 1
     
    }
    return [diagonal1, diagonal2];  
}
// console.log(sumaDiagonal(matrizVacia));


// *******************************************************************************

// Armar un array con objetos, que tengan como propiedad dia, mes, hora. Pasarle un valor y crear una funcion que le sume 1 unidad al dia.

let arrayObjetos = [
{
    dia : 10,
    mes : 1,
    hora : 8,

},
{
    dia : 9,
    mes : 1,
    hora : 8,

},
{
    dia : 10,
    mes : 1,
    hora : 8,

},
]

function sumarDia(array) {


    for (let i = 0; i < array.length; i++) {
       array[i].dia =  array[i].dia + 1;
    }
    
}
// sumarDia(arrayObjetos);
// console.log(arrayObjetos); 
    

//  **********************************************************************************

// primer ejercicio


const alumnos = [
    {
      id: 0,
      nombre: "Leandro",
      apellido: "Borrelli",
      legajo: 20210308,
      notas: [],
    },
    {
      id: 1,
      nombre: "Esteban",
      apellido: "Piazza",
      legajo: 20210211,
      notas: [],
    },
    {
      id: 2,
      nombre: "Martin",
      apellido: "Cejas",
      legajo: 20210218,
      notas: [],
    },
    {
      id: 3,
      nombre: "Karina",
      apellido: "Borgna",
      legajo: 20210516,
      notas: [],
    },
    {
        id: 5,
        nombre: "Javier",
        apellido: "Riera",
        legajo: 20220125,
        notas: [],
      },
    ];
//   Crear una función que ordene la estructura definida en el archivo final.js según la propiedad legajo de forma ascendente. (*)

function ordenar(array) {
    for (let i = 0; i < array.length; i++) {
       for (let j = 0; j < array.length - 1; j++) {
           
        if (array[j].legajo > array[j + 1].legajo) {
           let aux =  array[j];
           array[j] = array[j + 1];
           array[j + 1] = aux;    
        }
       }
        
    }
    return array;
}
// console.log(ordenar(alumnos));


// Ejercicio 2

// Dado el objeto alumno = {
// id: 5,
// nombre: "Javier",
// apellido: "Riera",
// legajo: 20220125,
// notas: [10,9,8,7,9]
// }
// Crear un método que retorne el promedio de notas. (*)
// Crear una función que ordene las notas del alumno de forma descendente. (*)


let alumno ={
    
        id: 5,
        nombre: "Javier",
        apellido: "Riera",
        legajo: 20220125,
        notas: [10,9,8,7,9],
        promedio : function () {

            let acumulador = 0;

            for (let i = 0; i < this.notas.length; i++) {
    
               acumulador = acumulador + this.notas[i];
                
            }

            return acumulador / this.notas.length;
        }
        
}
// console.log(alumno.promedio());


function ordenador() {

    // console.log(array.notas);
    for (let j = 0; j < alumno.notas.length; j++) {

        for (let i = 0; i < alumno.notas.length - 1; i++) {

            if (alumno.notas[i] < alumno.notas[i + 1]) {
                let aux = alumno.notas[i];
                alumno.notas[i] = alumno.notas[i + 1];
                alumno.notas[i + 1] = aux;
            }
        }
    }

}
ordenador(alumno);
console.log(alumno);





// Ejercicio 3
// Crea una matriz de 3x3, cuadrada, con números enteros positivos en cada una de sus posiciones.
// Crear una función que retorne la suma de todos los números dentro de la matriz que sean múltiplos de 3. 
// Crear una función que retorne un valor booleano dependiendo si la suma de todos los valores de la matriz es par.
// Crear una función que retorne la suma de las diagonales de la matriz.

// (*) Deberás mostrar por consola antes y después de función o método que implementaste. 

let matriz3x3 = [
    [3,2,1],
    [5,4,3],
    [6,1,7]
]

function sumatoria(array) {

let acumulador = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {

            if (array[i][j] % 3 === 0) {
                acumulador = acumulador + array[i][j];
                
            }else{
                
            }
        }
    }
    return acumulador;
}
// console.log(sumatoria(matriz3x3));


function booleanoPar(array) {
   
    let acumulador= 0;

        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                acumulador = acumulador + array[i][j];
     
            }
        }
        
        if (acumulador % 2 === 0) {
            return true;
            
        }else{
            return false;
    
        }
} 
// console.log(booleanoPar(matriz3x3));

function sumaDiagonal(array) {

    let diagonal1 = 0;
    let diagonal2 = 0;
        
    for (let i = 0; i < array.length; i++) {
       diagonal1 += array[i][i];
       diagonal2 += array[i][array.length -( i + 1)] 
     
    }
    return [diagonal1, diagonal2];  
}
console.log(sumaDiagonal(matriz3x3));

