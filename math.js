// CREAMOS UN MODULO DE OPERAIONES MATEMATICAS

function add(x1, x2) {
  return x1 + x2;
}

function sub(x1, x2) {
  return x1 - x2;
}

function mul(x1, x2) {
  return x1 * x2;
}

function div(x1, x2) {
  if (x2 <= 0) {
    console.log('No se puede dividir por cero');
  } else {
    return x1 / x2;
  }
}

//Formas de Exportar las funciones para poder ser utilizadas en otros archivos

/*
exports.add = add;
exports.sub = sub;
exports.mul = mul;
exports.div = div;
*/

const math = {
  add: add,
  sub: sub,
  mul: mul,
  div: div
};

module.exports = math; // De esta forma podemos exportar objectos como fuincones o variables
