/*Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. Es decir fila 0, 
semana 1, fila 1, semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera. */

let gastosMensuales = 
[
    [1135, 2500, 900, 1600, 2800,3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]
]
/*a)  Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, 
es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre
 en posición 0. 
*/

function gastosxsemana(matriz, semana) { //pasa dos parametros para usarlos en la funcion
    let totalSemanal = 0; //acumulador
    for (let i = 0; i < matriz.length; i++) { 
       for (let j = 0; j < matriz[i].length; j++) { //desde i para q me recorra todo
           if (i == semana - 1) { //condición es q el indice es = al num q le pasas x parametro a la función, es decir la semana. El -1 va porque las matrices comienzan siempre
                                  //en posición 0
                                  //Lo que va a hacer es buscar la posicion que le pase por parametro, en este caso 3.
                                  //en el caso de que el i (columna) sea = a 3, que representa la columna, retornar totalSemana....
               totalSemanal = totalSemanal + matriz[i][j]; //hace la suma de todos los numeros de la columna que pertenezan a la semana que le pasamos por parametro
           }   
       }   
    }
    return totalSemanal;
}
// console.log( gastosxsemana(gastosMensuales, 3));


//b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular
//por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también 
//comienzan en 0.

function dia(matriz, dia) {

    let totalDia = 0;
    for (let i = 0; i < matriz.length; i++) {
       for (let j = 0; j < matriz[i].length; j++) {
           if (j === dia - 1) { //el desarrollo es = al de arriba, solo q esta vez buscamos por fila, donde j=fila
            totalDia = totalDia + matriz[i][j];
       }        
    }
}
return totalDia;    
}
// console.log(dia(gastosMensuales, 3 ));


/*c) Por último, es necesario tener el total de gastos realizados en el mes.
Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto?*/

function mensual(matriz) { //en este caso es lo mismo q venimos haciendo pero sin el condicional

    let totalmensual = 0;
    for (let i = 0; i < matriz.length; i++) {
       for (let j = 0; j < matriz[i].length; j++) {
            totalmensual = totalmensual + matriz[i][j];         
    }
}
return totalmensual;   
}
// console.log( mensual(gastosMensuales));


//d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron

function gastosMayor(matriz) {

    let gastoMax = 0;
    let indexSemana = - 1;
    
    for (let i = 0; i < matriz.length; i++) {
        let totalSemanal = 0;
        
        for (let j = 0; j < matriz[i].length; j++) {
            totalSemanal = totalSemanal + matriz[i][j];   
        }   
        if (totalSemanal > gastoMax) {
            gastoMax = totalSemanal
            indexSemana = i + 1;
        }
    }
    let resultado = [gastoMax, indexSemana]
    return resultado;
}

//console.log( 'El Gasto Maximo es: ' + gastosMayor(gastosMensuales)[0] + ' y corresponde a la semana: ' + gastosMayor(gastosMensuales)[1]) ;
