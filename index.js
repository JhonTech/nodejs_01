//LOS MODULOS SE DECLARA CON SU MISMO NOMBRE

const math = require('./math.js'); //  LLAMAMOS EL MODULOS MATH QUE CREAMOS

// LLAMAMOS LOS METODOS
console.log(math.add(5, 30));
console.log(math.sub(84, 44));
console.log(math.mul(2, 5));
console.log(math.div(52, 7));
//console.log(math);  //para ver como llegan los archivos

console.log('---------------------------------------------');
console.log('');
console.log('');
console.log('---------------------------------------------');

//MODULO PARA VER INFO DEL SISTEMA OPERATIVO
const os = require('os'); // LLAMAMOS MODULO DE NODE.JS

// LLAMAMOS LOS METOS
console.log(os.platform());
console.log(os.hostname());
console.log(os.release());
console.log(os.uptime());

console.log('---------------------------------------------');
console.log('');
console.log('');
console.log('---------------------------------------------');

// MODULO PARA TRABJAR CON LOS ARCHIVOS DEL SISTEMA
const fs = require('fs');

// CREAMOS UN TEXTO EN ESTA CARPETA Y LE ESCRIBIMOS HOLA MUNDO
        //CREAR ARCHIVO       CONTENIDO    RESPUESTA
fs.writeFile('./texto.txt', 'Hola mundo', function(err){
  if (err) {
    console.log(err);
  }
  console.log('Archivo creado');
});


//  METODO PARA LEER UN ARCHIVO EXISTENTE
fs.readFile('./texto.txt', function(err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});
