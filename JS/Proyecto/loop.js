function loopDePares (numero) {
    for (let index = 0; index <= 100; index++) {
        if ((index + numero) % 2 === 0) {
            console.log('El numero' + (index + numero) + 'es par');
        } else {
            console.log(index);
        }
    }
}
loopDePares(1);

function loopDeImpares (numero, palabra) {
    for (let index = 0; index <= 100; index++) {
        if ((index + numero) % 2 !== 0) {
            console.log(palabra + (index + numero));
        } else {
            console.log(index);
        }
    }
}
loopDeImpares(3, 'hola');

function sumatoria(numero) {
    for (let index = 0; index < numero; index++) {
        console.log (numero + " + " + index + " = "  + (numero + index));
    }
}

sumatoria(3);


function sumatoria (numero) {
    let resultado = 0;
    for (let index = 0; index < numero.length; index++) {
        resultado = numero + array[index];
    }
    return resultado;
}

console.log(sumatoria(3));

function nuevoArreglo (numero) {
let arrayArreglo = [];
for (let index = 1; index <= numero; index++) {
 arrayArreglo.push (index);
    }
    return arrayArreglo;
}

console.log (nuevoArreglo(10));

function split2(string) {
    let resultado = [];
    for (let i = 0; i < string.length; i++) {
        resultado.push (string[i]);
    }
    return resultado;
}
    
console.log(split2('hola'));

function caracterDelMedio(palabra) {
    if (palabra.length % 2 === 0) {
        return palabra.slice ((palabra.length/2)-1,(palabra.length/2)+1); OL
    }
    else {
        return palabra.slice ((palabra.length -1) / 2, (palabra.length -1) /2 +1)
    }
}
 
console.log (caracterDelMedio('Digital House'));
