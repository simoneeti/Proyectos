const jsdom = require("jsdom");
const fs = require('fs');
const colors = require('colors');
const Discord = require('discord.js');
const client = new Discord.Client();

var url = 'https://www.buenosaires.gob.ar/coronavirus/vacunacion-covid-19/personal-de-salud';

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('codigoRojo', () => {

});

var i = 0;

setInterval(function() {
    const A = jsdom.JSDOM.fromURL(url);
    A.then((dom) => {
        var bokita = dom.window.document.getElementById('fondoColor-1').textContent.trim().replace(/\t/g, '');
        var data = JSON.stringify(bokita);
        if (data == fs.readFileSync('./last.json', 'utf8')) {
            console.log("intento numero ".green + colors.green(i) + ": sin cambios. ".green + hora);
        } else {
            console.log("cambios - CODIGO ROJO ".red + colors.red(hora) + " DALE BOKAAAAA".blue);
            emitter.emit('codigoRojo');

            fs.writeFile('last.json', data, (err) => {
                if (err) {
                    throw err;
                }
                console.log("last.json actualizado");
            });

        }

    });
    i++;
    var milisegundos = new Date();
    var hora = milisegundos.toTimeString();
}, 6000);