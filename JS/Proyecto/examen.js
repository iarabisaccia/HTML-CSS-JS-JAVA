let estudiantes = {
    nombre : 'Iara',
    apellido : 'Bisaccia',
    camada : 'C8',
    esParcial : true,
}

function situacion (nota) {
    if (nota < 4) {
        return 'Desaprobado';
    } else if (nota <=4 && nota <7) { //en el 4 va
        return 'Debera rendir examen final';
    } else if (nota >= 7){
        return 'Promocionado';
    }
}

console.log('El alumno obtuvo una nota igual a ' + 10 + ' por lo tanto su condicion es ' + situacion(10));

let arrayClase = [];
let objetos = [{
    nombre : 'Esteban',
    apellido : 'Piazza',
    bimestre : 1,
}, 
{
    nombre : 'Leandro',
    apellido : 'Borrelli',
    bimestre : 1,
},
{
    nombre : 'Martin',
    apellido : 'Cejas',
    bimestre : 1,
},
]
arrayClase.push(objetos);
console.log(arrayClase);

function siguienteCursada (arrayClase) {
    for (let index = 0; index < objetos.length; index++) {
        objetos[index].bimestre = (objetos[index].bimestre + 1);
    }

}
console.log(siguienteCursada(arrayClase));

const asistenciaMinima = 23;

function asistencias (asistenciaMinima, condicion) {
    if (asistenciaMinima <= 23 && condicion == true) {
        return 'Aprobado';
    } else {
        return 'Desaprobado';
    }
}

console.log(asistencias(20, true));

