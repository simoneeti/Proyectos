const jsdom = require("jsdom");
const readline = require('readline')
const fs = require('fs');
const EventEmitter = require('events');
const emitter = new EventEmitter();

var url = 'https://time.is/es/Argentina';
emitter.on('codigoRojo', () => {

    console.log("codigo rojo")

});

setInterval(function () {
    const A = jsdom.JSDOM.fromURL(url);
    A.then((dom) => {
        var bokita = dom.window.document.getElementById('clock').textContent.trim();
       var data = JSON.stringify(bokita);
        if (data == fs.readFileSync('./last.json', 'utf8')) {
            console.log("sin cambios");
        } else {
            console.log("cambios");
            emitter.emit('codigoRojo');
            console.log(fs.readFileSync('./last.json', 'utf8'));
            fs.writeFile('last.json', data, (err) => {
                if (err) {
                    throw err;
                }
                console.log("data is saved");
            });

        }
        
    });
}, 5000);