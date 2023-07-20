/* Ejercicio 1
Revisa el siguiente archivo, identifica sus componentes, vamos a estar usándolos a lo largo de este ejercicio.  

¿Qué tipo de dato contiene la variable ‘alumnos’?
La variable ‘alumnos’ contiene varios objetos literales con sus respectivas propiedades.

¿Qué propiedades tiene la estructura definida en el archivo final.js? 
Las propiedades que estan definidas en el archivo final.js son el id, nombre, apellido, legajo y notas.

Crear una función que ordene la estructura definida en el archivo final.js según la propiedad legajo de forma ascendente. (*) 
*/

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

function ordenAsc (array) {
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

console.log(alumnos);
console.log(ordenAsc(alumnos));

/* Ejercicio 2
Dado el objeto alumno = {
id: 5,
nombre: "Javier",
apellido: "Riera",
legajo: 20220125,
notas: [10,9,8,7,9]
}
Crear un método que retorne el promedio de notas. (*)
Crear una función que ordene las notas del alumno de forma descendente. (*) */

let alumno = {
  id: 5,
  nombre: "Javier",
  apellido: "Riera",
  legajo: 20220125,
  notas: [10,9,8,7,9],
  promedio : function () {
    let acumulador = 0;
    for (let i = 0; i < this.notas.length; i++) {
      acumulador += this.notas[i];
    }
    return acumulador / this.notas.length;
  }
}

console.log(alumno);
console.log(alumno.promedio());

//Ejercicio 3. 

//Crea una matriz de 3x3, cuadrada, con números enteros positivos en cada una de sus posiciones.

let matriz = []

function crear (matriz, longitud) { 
    let acumulador = 0; 
    for (let i = 0; i < longitud ; i++) {
        let elementos = [];
        for (let j = 0; j < longitud; j++) {
          acumulador += 3;  
          elementos.push(acumulador);  
        }
        matriz.push(elementos); 
    }
}
crear(matriz, 3); 
console.table(matriz);

//Crear una función que retorne la suma de todos los números dentro de la matriz que sean múltiplos de 3.

function sumaTotalMultiplos3 (array) {
  let acumulador = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i][j] % 3 === 0) {
        acumulador += array[i][j];
      } else {

      }
    }
  }
  return acumulador;
}

console.log(sumaTotalMultiplos3(matriz));

//Crear una función que retorne un valor booleano dependiendo si la suma de todos los valores de la matriz es par.

function sumaTotalEsPar (array) {
  let acumulador = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      acumulador += array[i][j];
    }
  }
  if (acumulador % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(sumaTotalEsPar(matriz));

//Crear una función que retorne la suma de las diagonales de la matriz

function sumaDiagonales (array) {
  let diagonal = 0;
  let diagonalInvertida = 0;
  for (let i = 0; i < array.length; i++) {
    diagonal += array[i][i];
    diagonalInvertida += array[i][array.length - (i + 1)];
  }
  return [diagonal, diagonalInvertida];
}

console.log(sumaDiagonales(matriz));

//Deberás mostrar por consola antes y después de función o método que implementaste. Utiliza VisualStudio code.