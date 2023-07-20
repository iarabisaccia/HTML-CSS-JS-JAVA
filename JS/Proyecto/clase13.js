let arraymisMascotas = [
    {
        nombre: 'Pepito',
        raza: 'Dogo',
        edad : 10,
        sonido: ladrido,
        sonidoMascota : function () {
            return `${this.sonido} ${this.sonido}`;
        }
    }
];

function aumentarEdad () {
    for (let index = 0; index < array.length; index++) {
        array[index].edad = array[index].edad + 1;
    }
}

//console.log(aumentaredad(arraymisMascotas));

function aumentarEdad2 () {
    for (let index = 0; index < array.length; index++) {
        if (array[index].edad <= 6) {
            array[index].edad = array[index].edad + 1;
        } else if (array[index].edad > 6 && array[index].edad <= 10) {
            array[index].edad = array[index].edad + 2;
        } else if (array[index].edad >10) {
            array[index].edad = array[index].edad + (array[index].edad/2);
        }
    }
} 

//console.log(aumentarEdad2(arraymisMascotas));

function id (array) {
    for (let index = 0; index < array.length; index++) {
        array[index].identificador = index + 1;
    }
}

//console.log(id(arraymisMascotas));

function eliminar (array) {
    for (let index = 0; index < array.length; index++) {
        delete array[index].raza;
    }
}

//console.log(eliminar(arraymisMascotas));
