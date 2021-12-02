const miPromise1 = function () {
    return new Promise(function (resolve) {
        console.log(Date.now() + " - Ejecutando miPromise1");
        setTimeout(function () {
            resolve(Date.now() + " - Terminamos de ejecutar Promise1 con exito.");
        },5000);
    });
}
const { Resolver } = require("dns");
const fs = require("fs");

const miPromise2 = function () {
    return new Promise(function (resolve){
        console.log(Date.now() + " - Ejecutando miPromise2");
        fs.readFile('./input.txt', function (err, data){
            resolve(data);
        });
    });
}

miPromise1().then(function (data) {
    console.log(data);
});

miPromise2().then(function (data) {
    console.log(Date.now() +" - "+ data.toString());
});

console.log(Date.now() + ' - Ultima instrucción.');