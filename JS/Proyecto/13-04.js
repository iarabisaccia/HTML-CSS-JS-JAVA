/* En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—. */

let arrayLikes = [
    {
        usuario : 'pepito123',
        cantidadLikes: 20008,
    },
    {
        usuario : 'josefina2',
        cantidadLikes : 4005,
    },
    {
        usuario : 'juan',
        cantidadLikes: 20030,
    },
    {
        usuario : 'sofia',
        cantidadLikes : 9020,
    }, 
    {
        usuario : 'carlos',
        cantidadLikes: 80700,
    },
    {
        usuario : 'matilda',
        cantidadLikes : 400900,
    },
    {
        usuario : 'connie',
        cantidadLikes: 205300,
    },
    {
        usuario : 'main',
        cantidadLikes : 794200,
    }, 
    {
        usuario : 'cnie',
        cantidadLikes: 2096500,
    },
    {
        usuario : 'man',
        cantidadLikes : 4010,
    }, 
    {
        usuario : 'conn',
        cantidadLikes: 25100,
    },
    {
        usuario : 'ma',
        cantidadLikes : 9100,
    }, 
    {
        usuario : 'ce',
        cantidadLikes: 212000,
    },
    {
        usuario : 'mart',
        cantidadLikes : 91240,
    }, 
    {
        usuario : 'co',
        cantidadLikes: 20450,
    },
];

function ordenar (array) {
    for (let i = 0; i < array.length; i++) { //bubble sort.
       for (let j = 0; j < array.length - 1; j++) {
          if (array[j].cantidadLikes < array[j + 1].cantidadLikes) { //para comparar la propiedad de cantidadLikes que está dentro del objeto. Es mayor xq quiero ordenarlos del max al min. 
            let aux = array[j];
            array[j] = array[j + 1];
            array[j + 1] = aux;
          }
       }
    }
    return arrayLikes;
}

console.log(ordenar(arrayLikes));

function elPrimero (array) {
    let primero = array[0]; //declaro var = array en posicion 0 para q empiece a comparar desde el inicio del array.
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[j].cantidadLikes > primero) { //
            primero = array[j];
        }
      }
    }
    return primero;
}

//console.log(elPrimero(arrayLikes));

function elUltimo (array) {
    let ultimo = array[0];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[j].cantidadLikes < ultimo) {
            ultimo = array[j];
        }
      }
    }
    return ultimo;
}

//console.log(elUltimo(arrayLikes));

function elSegundo (array) {
    let segundo = array[0];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j].cantidadLikes > segundo) {
                segundo = array[j] - 1;
            }
        }
    }
    return segundo;
}

//console.log(elSegundo(arrayLikes)); 

let ganadores = {
    elPrimero : arrayLikes[0],
    elSegundo : arrayLikes[1],
    elTercero : arrayLikes[2],
}

//console.log(ganadores);

/* El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
objeto temperatura donde registra día —valor numérico del día—, mes —valor
numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
día. Las temperaturas —objeto temperatura— están cargados en un array.
a) Ordenar por temperatura mínima de menor a mayor.
b) Ordenar por temperatura máxima de mayor a menor. */

let arrayServicio = [
    {
        dia : 24,
        mes : 04,
        tempMax : 30,
        tempMin : 20,
    },
    {
        dia : 16,
        mes : 03,
        tempMax : 25,
        tempMin : 10,
    },
    {
        dia : 8,
        mes : 11,
        tempMax : 10,
        tempMin : 2,
    },
    {
        dia : 7,
        mes : 05,
        tempMax : 15,
        tempMin : 7,
    },
]

function ordenaMax (array) {
    for (let i = 0; i < array.length; i++) {
       for (let j = 0; j < array.length - 1; j++) {
          if (array[j].tempMax < array[j + 1].tempMax) {
            let aux = array[j];
            array[j] = array[j + 1];
            array[j + 1] = aux;
          }
       }
    }
    return arrayServicio;
}

//console.log(ordenaMax(arrayServicio));

function ordenaMin (array) {
    for (let i = 0; i < array.length; i++) {
       for (let j = 0; j < array.length - 1; j++) {
          if (array[j].tempMin > array[j + 1].tempMin) {
            let aux = array[j];
            array[j] = array[j + 1];
            array[j + 1] = aux;
          }
       }
    }
    return arrayServicio;
}

//console.log(ordenaMin(arrayServicio));



