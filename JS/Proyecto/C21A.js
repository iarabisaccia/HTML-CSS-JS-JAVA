/**
 *  Crear una función que imprima todos
 *  los dígitos decimales, del 0 al 9,
 *  usando un ciclo For.
 */

 function mostrarDecimales() {
  for (let i = 0; i < 10; i++) { //del 0 al 9

      //console.log(`1.${i}`); //1.${i} es para decirle que sean los decimales
  }
}
//console.log(mostrarDecimales());

/**
*  Crear una función que imprima todos
*  los números entre el 5 y el 20
*  saltando de tres en tres.
*/

function saltando() {

  for (let i = 5; i <= 20; i = i + 3) { // numeros entre 5 y 20, i + 3 para q vaya d 3 en 3
      //console.log(i);
  }
}
saltando();


/**
*  Crear una función que imprima todos
*  la sumatoria de todos los número
*  el 0 y el 100.
*/
function sumatoria() {
  let resultado = 0; //acumulador
  for (let i = 0; i < 100; i++) { //de 0 a 100
      resultado = resultado + i; //acumulador + index
  }
  return resultado;
}
//console.log(sumatoria());

/**
*  Crear una función que reciba un
*  string y luego imprimir la
*  cantidad de vocales que se
*  encuentran en dicha frase.
*/

function cantidadVocales(params) {
  let canVocales = 0; //
  for (let i = 0; i < params.length; i++) {
      if (params[i].toLocaleLowerCase() === 'a' || //si el index es = estricto a la vocal, OR a la otra y asi
          params[i].toLocaleLowerCase() === 'e' || //el.toLocaleLowerCase() es para que si le paso un string en mayúsculas 
          params[i].toLocaleLowerCase() === 'i' || //me cuente las letras igual, sino no las va a tomar

          params[i].toLocaleLowerCase() === 'o' || 
          params[i].toLocaleLowerCase() === 'u') {
          canVocales++; //acumulador + 1, para q me sume la cant de vocales 
      }
  }
  return canVocales;
}
//console.log('cantidad de vocales: ' + cantidadVocales('SEMAFORO'));

/**
* Realizar una función que, dada
*  una lista, devuelva una nueva lista
*  cuyo contenido sea igual a la
*  original pero invertida.
*/

let listaString = [1,2,3,4,5,6]

function invertida() {
  let aux = []; //crea el array nuevo en el que vamos a pushear el array inertido
  for (let i = 0; i < listaString.length; i++) {
      aux.unshift(listaString[i])
  }
  return aux;
}

//console.log(invertida(listaString));

/**
* Realiza una función que escriba
*  una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555
666666
…….
*/

function piramide(num) {
  let matrizResultado = [];
  for (let f = 1; f <= num; f++) {
      let filaArray = [];
      let aux =  f
      for (let c = 0; c < aux; c++) {
          filaArray.push(aux)
      }
      matrizResultado.push(filaArray)
  }
  return matrizResultado
}
//console.log(piramide(30));