const Discord = require('discord.js');
const client = new Discord.Client();

setTimeout(function() {
    client.on("alerta", function() {
    const channel = client.channels.cache.get("810037222685409293");
    channel.send('ALERTA ROJA - PAGINA CAMBIÓ');
});
}, 3000);



// client.on('ready', function() {
//     console.log("ok");
//     // const channel = client.channels.cache.get("810037222685409293");
//     // channel.send('asdkjaskdjhaskjdbh');

// });

// client.login("ODEwMDM1MjQ3ODcyNzM3Mjkx.YCdyHA.SnWbR7wH1U-PU-oMLQtvSN_kWsI");



// conseguir pagina y generar alerta

const jsdom = require("jsdom");
const fs = require('fs');
const colors = require('colors');

var url = 'https://www.buenosaires.gob.ar/coronavirus/vacunacion-covid-19/personal-de-salud';

const EventEmitter = require('events');
const emitter = new EventEmitter();

// emitter.on('codigoRojo', () => {

// });

var i = 0;
var archivo = 1;
setInterval(function() {
    const A = jsdom.JSDOM.fromURL(url);
    A.then((dom) => {
        var bokita = dom.window.document.body.textContent.trim().replace(/\t/g, '');
        var data = JSON.stringify(bokita);
        if (data == fs.readFileSync(`./last${archivo - 1}.json`, 'utf8')) {
            console.log("intento numero ".green + colors.green(i) + ": sin cambios. ".green + hora);
        } else {
            console.log("cambios - CODIGO ROJO ".red + colors.red(hora) + " DALE BOKAAAAA".blue);
            emitter.emit('codigoRojo');
            //client.emit("alerta");

            fs.writeFile(`last${archivo}.json`, data, "utf8", (err) => {
                if (err) {
                    throw err;
                }
            });
            console.log(`last${archivo}.json actualizado`);
            archivo = archivo + 1;
        }

    });
    i++;
    var milisegundos = new Date();
    var hora = milisegundos.toTimeString().replace("GMT-0300 (hora estándar de Argentina)", "");
}, 20000);