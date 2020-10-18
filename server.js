// CREAMOS UN SERVIDOR

const http = require('http');// LLAMOS EL MODULO http
const colors = require('colors'); // LLAMAMOS MODULO COLOR

// CREAMOS EL MANEJADOR DE SERVIDOR (HANDLE SERVER)
const handleServer = function (req, res) {
  res.writeHead(200), {'content-type': 'text/html'};// Codigo de estado html
  res.write('<h1> Hola mundo desde Node.js </h1>');// Contenido
  res.end();                                       // Fin de la respuesta
}

// CREAMOS EL SERVIDOR
const server = http.createServer(handleServer);

// CONFIGURAMOS EL PUERTO CON UNA FUNCION CALLBACK
server.listen(3000, function(){
  console.log('Server on port 3000'.green);//mostramos el mensaje en color verde
})
