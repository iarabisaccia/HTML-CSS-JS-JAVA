function sumar (nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3)/3;
}

console.log(sumar(3, 4, 5));

///

const prompt = require("prompt-sync") ({ sigint: true });

let nota1 = parseInt(prompt('Nota1: '));
let nota2 = parseInt(prompt('Nota2: '));
let nota3 = parseInt(prompt('Nota3: '));

let suma = (nota1 + nota2 + nota3)/3;

function promedio () {
    if (suma < 10.5) {
        console.log('Aprobado');
    } else {
        console.log('Desaprobado');
    }
}

console.log (promedio);



///


function convertidor (pesos) {
    return pesos*200;
}

console.log(convertidor(10));

///

///const prompt = require("prompt-sync") ({ sigint: true });

let pesos = parseInt(prompt('ingrese numero: '));

console.log(pesos *200);

///

//const prompt = require("prompt-sync") ({ sigint: true });

let salario = parseInt(prompt('Escriba su salario: '));

console.log(salario * 0.2);

//

//const prompt = require("prompt-sync") ({ sigint: true });

let usuario = prompt('Ingrese el usuario: ');
let contraseña = prompt('Ingrese la contraseña: ');

//function funcion () {
    //if (usuario = 'ADMIN' && contraseña = '123456') {
        //console.log('Acceso permitido');
    //} else {
        //console.log('Acceso denegado');
    //}
//}

//
