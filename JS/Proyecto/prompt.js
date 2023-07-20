const prompt = require("prompt-sync") ({ sigint: true });

let numero2 = parseInt(prompt('ingrese numero: '));

function numerosAleatorios() {
    let aleatorio = Math.round(Math.random()*10);
        if (numero2 == aleatorio) {
            console.log('adivinaste');
        } else {
            alert("Número aleatorio entre 0 y 10:"+aleatorio);
        }
}

//const prompt = require("prompt-sync") ({ sigint: true });

let nacimiento = parseInt(prompt('anio de nacimiento: '));

console.log('tienes ' + (2022-nacimiento) + 'años ');
    
//const prompt = require("prompt-sync") ({ sigint: true });
let nombre = prompt ('escriba su nombre: ');

console.log ('hola ' + nombre + '!');

//const prompt = require("prompt-sync") ({ sigint: true });

let numero1 = parseInt(prompt('n1: '));
//let numero2 = parseInt(prompt('n2: '));

console.log(numero1 + numero2);
