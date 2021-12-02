const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on('enCincuenta',function () {
    console.log(Date.now() + " Llegamos a 50.");
});

eventEmitter.on('enUno', function() {
    console.log(Date.now() + ' Iniciando...');
});

eventEmitter.on('enCien', function () {
    console.log(Date.now() + ' Llegamos al final');
});

for (i=0;i<=100;i++) {
    console.log(Date.now() + " " + i);
    if (i==1) eventEmitter.emit('enUno');
    if (i==50) eventEmitter.emit('enCincuenta');
    if (i==100) eventEmitter.emit('enCien');
}