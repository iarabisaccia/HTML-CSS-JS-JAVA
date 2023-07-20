//Crear un array llamado misMascotas 
//Dentro de este array crearemos un objeto para cada mascota. Cada objeto deberá tener: 
//nombre
//raza
//edad 
//sonido
//un método que nos retorne ese sonido 2 veces
//Cuando esté listo, verificar en consola
//Deberemos crear una función que se llame aumentarEdad que aumente la edad de cada animal en 1.
//Ahora debemos crear otra función, que se llame  aumentarEdad2, que va a hacer un trabajo más fino:
//Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
//Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
//Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad

//Ahora crearemos una función que va a generar un identificador (ID) en cada objeto, que será secuencial y que empezará en 1.
//Por último eliminaremos la propiedad ‘raza’ , ya que para nosotros todos los animalitos son iguales 💘💞

let misMascotas = [
    {
        nombre : 'Lucas',
        raza : 'Pequines',
        edad : 4,
        sonido : 'guaw',
        hacerSonido : function () {
            return this.sonido + '' + this.sonido;
    }
    },
    {
        nombre : 'Pepe',
        raza : 'Dalmata',
        edad : 9,
        sonido : 'guaw2',
        hacerSonido : function () {
            return this.sonido + '' + this.sonido;
    }
    }
]
console.log(misMascotas);
console.log(misMascotas[1].hacerSonido);

function aumentarEdad (array) {
    for (let index = 0; index < array.length; index++) {
        array[i].edad = array[i] + 1;
    }
};

console.log(misMascotas[0].edad);
aumentarEdad(misMascotas);
console.log(misMascotas[0].edad) //imprimo x consola la edad de la mascota en posicion 0
