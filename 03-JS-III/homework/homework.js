// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
  // Imprime la suma de los números del 1 al 10
  // Pista: usa un acumulador
  // Tu código:
  let numero = 0;
  for (i = 1; i <= 10; i++) {
    numero = numero + i;
  }
  return numero;
}

function encuentraPares(array) {
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  let arraySub = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) arraySub.push(array[i]);
  }
  return arraySub;
}

function elevaAlCuadrado(array) {
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  let arrayAnswer = [];
  for (i = 0; i < array.length; i++) {
    let answer = array[i] ** 2;
    arrayAnswer.push(answer);
  }
  return arrayAnswer;
}

function sumaArray(array) {
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  let suma = 0;
  for (i = 0; i < array.length; i++) {
    suma = suma + array[i];
  }
  return suma;
}

function numeroDigitos(num) {
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  let answer = `${num}`;
  return answer.length;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  imprimirSumaNumeros,
  encuentraPares,
  elevaAlCuadrado,
  sumaArray,
  numeroDigitos,
};
