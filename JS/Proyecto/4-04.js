// Dado los siguientes numeros:

arrayNumeros = [43, 78, 14]

arrayNumeros.push(10000);

function elMayor (array) {
    let mayor = arrayNumeros[0];
    for (let index = 1; index < array.length; index++) {
        if (array [index] > mayor) {
           mayor = array[index];
        }
    }
    return mayor;
    }

console.log(elMayor(arrayNumeros));

// Crea un algoritmo que te permita identificar
// el numero mayor. Utiliza condicionales como el
// if, else, o else if.

// Escribe tu código debajo de estas lineas,
// y observa los resultados por la consola.
// especificamente para este conjunto de datos
// deberias ver por consola el numero 78,
// adicional, cambia los valores de num1, num2 y num3
// para verificar que tu algoritmo funcione con
// cualquiera 3 valores.

