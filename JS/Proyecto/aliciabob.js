const alicia = [10, 80, 75];
const bob = [90, 20, 25];
let arrayEtapas = [];

function encontrarGanador (alicia, bob) {
    let resultadoAlicia = 0;
    let resultadoBob = 0;
    for (let index = 0; index < alicia.length; index++) {
        if (alicia[index] < bob[index]) {
            resultadoAlicia = resultadoAlicia + 1;
            arrayEtapas.push ('Alicia');
        } else if (alicia[index] > bob[index]) {
            resultadoBob = resultadoBob + 1;
            arrayEtapas.push ('Bob');
        }
    }
    if (resultadoAlicia>resultadoBob) {
        return 'Alicia';
    } else if (resultadoAlicia < resultadoBob) {
        return 'Bob';
    } else {
        return 'Empate';
    }
}
console.log('El ganador es: ' + encontrarGanador(alicia, bob));

let concurso = {
    etapas : arrayEtapas,
    ganador : encontrarGanador(alicia, bob),
    encontrarGanador : function () {
        console.log('El ganador es: ' + this.ganador);
    }
}

console.log(concurso);
concurso.encontrarGanador();

let bimestraMasUno = {
    array2 : objetos,
    siguienteCursada : function (arrayClase) {
        for (let index = 0; index < this.array2.length; index++) {
            this.array2[index].bimestre = this.array2[index].bimestre + 1;
        }
    }
}

let bimestreUno = bimestraMasUno.siguienteCursada(arrayClase);
console.log(siguienteCursada(arrayClase));