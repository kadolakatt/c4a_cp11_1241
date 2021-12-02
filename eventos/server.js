const http = require("http");
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const server = http.createServer(function (request, response) {
    eventEmitter.emit('enPeticionRecibida', request.url);
    response.writeHead(200, {"content-type": "text/html"});
    response.end("<h1>Hola Mundo</h1>");
    eventEmitter.emit('enRespuestaEnviada', request.url);
});

eventEmitter.on('enPeticionRecibida', function(url) {
    console.log("Petición recibida en: " + url);
});

eventEmitter.on('enRespuestaEnviada', function(url) {
    console.log("Respuesta enviada desde: " + url);
});

console.log("Ejecutando el servidor...");
server.listen(8000);