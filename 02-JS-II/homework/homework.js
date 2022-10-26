// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str;
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  let operation = x + y;
  return operation;
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  let operation = x - y;
  return operation;
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  let operation = x * y;
  return operation;
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  let operation = x / y;
  return operation;
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  let operation = x === y;
  return operation;
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  let operation = str1.length === str2.length;
  return operation;
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  let operation = num < 90;
  return operation;
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  let operation = num > 50;
  return operation;
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  let operation = x % y;
  return operation;
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  let operation = num % 2;
  if (operation == 1) {
    return false;
  } else {
    return true;
  }
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  let operation = num % 2;
  if (operation == 0) {
    return false;
  } else {
    return true;
  }
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  num = num ** 2;
  return num;
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  num = num ** 3;
  return num;
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  operation = num ** exponent;
  return operation;
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  num = Math.round(num);
  return num;
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  num = Math.ceil(num);
  return num;
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  // Tu código:
  num = Math.random();
  return num;
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  // Tu código:
  if (numero > 0) {
    return 'Es positivo';
  } else if (numero < 0) {
    return 'Es negativo';
  } else {
    return false;
  }
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  let adding = str + '!';
  return adding;
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  let combine = `${nombre} ${apellido}`;
  return combine;
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  let adding = `Hola ${nombre}!`;
  return adding;
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  let operation = alto * ancho;
  return operation;
}

function retornarPerimetro(lado) {
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  let operation = lado * 4;
  return operation;
}

function areaDelTriangulo(base, altura) {
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  let operation = (base * altura) / 2;
  return operation;
}

function deEuroAdolar(euro) {
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  let operation = euro * 1.2;
  return operation;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
};
