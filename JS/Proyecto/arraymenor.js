const arrayEdades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

function cambio(array) {
    let arrayMenor18 = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] < 18) {
            arrayMenor18.push(arrayEdades[index]);
        }
    }
    return arrayMenor18;
    
}

console.log(cambio(arrayEdades));

function cambio2(array) {
    let arrayMayor18 = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] >= 18) {
            arrayMayor18.push(arrayEdades[index]);
        }
    }
    return arrayMayor18;
}

console.log(cambio2(arrayEdades));

function cambio3(array) {
    let arrayIgual18 = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] == 18) {
            arrayIgual18.push(arrayEdades[index]);
        }
    }
    return arrayIgual18;
}

console.log(cambio3(arrayEdades));

function menor(array) {
    let elMenor = arrayEdades[0];
    for (let index = 1; index < array.length; index++) {
        if (array [index] < elMenor) {
           elMmenor = array[index];
        }
    }
    return elMenor;
}

console.log(menor(arrayEdades));

function promedio(array) {
    let resultado = 0;
    for (let index = 0; index < array.length; index++) {
        resultado = resultado + array[index];
    }
    return resultado/array.length;
}

console.log(promedio(arrayEdades)); 

function suma(array) {
    let incremento = 0;
    for (let index = 0; index < array.length; index++) {
        resultado = resultado + array[index];
    }
    return incremento;
}

console.log(suma(arrayEdades)); 

const arrayCuentas =
[
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: "$3,253.40",
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: "$3,229.45",
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: "$1,360.19",
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: false,
      saldo: "$3,627.12",
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Ethel Leon",
      estaHabilitada: true,
      saldo: "$1,616.52",
      edadTitular: 34,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Harding Mitchell",
      estaHabilitada: true,
      saldo: "$1,408.68",
      edadTitular: 25,
      tipoCuenta: "corriente"
    }
  ]

function menores (array) {
    let menor30;
    for (let index = 0; index < array.length; index++) {
        if (array[index].edadTitular < 30) {
            menor30.push(array[index]);
        }
    }
    return menor30;
}
console.log(menores(arrayCuentas));
console.log('la edad es ' + menor30(arrayCuentas)[0].edadTitular);

function mayores (array) {
    let mayorigual30;
    for (let index = 0; index < array.length; index++) {
        if (array[index].edadTitular >= 30) {
            mayorigual30.push(array[index]);
        }
    }
    return mayorigual30;
}
console.log(mayorigual30(arrayCuentas));

function igual (array) {
    let igual30;
    for (let index = 0; index < array.length; index++) {
        if (array[index].edadTitular == 30) {
            igual30.push(array[index]);
        }
    }
    return igual30;
}
console.log(mayorigual30(arrayCuentas));

function joven(array) {
    let elJoven = arrayCuentas[0];
    for (let index = 1; index < array.length; index++) {
        if (array [index] < elJoven) {
           elJoven = array[index];
        }
    }
    return elJoven;
}

function habilitadas () {
    let habilitada = [];
    let deshabilitada = [];
    for (let index = 0; index < arrayCuentas.length; index++) {
        if (arrayCuentas[index].estaHabilitada == true) {
            habilitada.push(arrayCuentas[index].estaHabilitada);
        } else {
            deshabilitada.push(arrayCuentas[index].estaHabilitada);
        }
    }
}



