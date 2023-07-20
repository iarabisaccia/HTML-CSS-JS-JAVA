//Alicia

function digitalHouse (numero1, numero2) {
    for (let index = 1; index <= 100; index++) {
        if (index % numero1 === 0 && index % numero2 === 0) {
            console.log('Digital House');
        }
        else if (index % numero1 ===0) {
            console.log('Digital');
        } else if (index % numero2 ===0) {
            console.log('House');
        } else {
            console.log(index);
        }
    }
}

digitalHouse(2, 3);

function sumaArray (array) {
    let resultado = 0;
    for (let index = 0; index < array.length; index++) {
        resultado = resultado + array[index];
    }
    return resultado;
}

console.log(sumaArray([1, 2, 3]));


//Objetos literales


