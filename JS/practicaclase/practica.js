//Sumar todas las notas y dividirlas entre la cantidad de notas a promrfiar, PROMEDIO=(NOTA1+NOTA2+NOTA3)/3
//const prompt = require("prompt-sync") ({ sigint: true });
function promedio (nota1, nota2, nota3) {
    console.log ("El promedio es: " + (nota1 + nota2 + nota3)/3);
}

promedio(10, 5, 2);

//parseInt (prompt ...) para convertir un string a numero. 

//Hacer 1 programa para calcular el promedio de 3 notas, y si es mayor q 10.5 mostrar aprobado, de lo contrario desaprobado.

function promedio (nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3)/3;
}

console.log ("El promedio es: " + (nota1 + nota2 + nota3)/3);

let promedio2 = promedio(2, 5, 10);

function aprueba (numero) {
    if(numero > 6) {
        console.log('aprueba');
    } else {
        console.log('desaprueba');
    }
}

aprueba(promedio2);
aprueba(promedio(3,10,8)); 

//Algoritmo para convertir una cant de pesos a dolares

function conversor (numero) {
    return (numero /200);
}

console.log(conversor(20));


function conversion () {
    let pulgada = prompt('Ingresa un numero en pulgadas: ');
    return pulgada * 2.54;   
}
console.log('En centimetros son: ' + conversion());
//funciondeclarada


let conversion = () => {
    let pulgada = prompt('Ingresa un numero en pulgadas: ');
    return pulgada * 2.54;
} //arrowfunction

function conversion2(nombre) {
    return 'http://wwww.' + nombre + '.com';
}

console.log(conversion2('pepito'))

function conversion3(nombre) {
    return 'http://wwww.' + nombre + '.com';
}

console.log(conversion2('pepito2'));

function frase(texto) {
    return texto + '!';
}

console.log (frase('hola, soy un texto'));

function conversion4() {
    return numero * 7
}