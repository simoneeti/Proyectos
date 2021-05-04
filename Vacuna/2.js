var jsdom = require("jsdom");
const readline = require('readline')
const fs = require('fs');

/*
var url = 'https://www.buenosaires.gob.ar/coronavirus/vacunacion-covid-19/personal-de-salud';

function funcion() {

    const A = jsdom.JSDOM.fromURL(url);
    A.then((dom) => {
        return dom.window.document.getElementById('fondoColor-1').textContent.trim();
    });
}
function daleboka() {
    funcion();
    setTimeout(() => {
        console.log(jsdom.JSDOM.fromURL(url).dom)
    }, 1000);
}
daleboka();

jsdom.JSDOM.fromURL(url)

async function myFunction() {
    var ventana = await jsdom.JSDOM.fromURL(url);
    console.log(jsdom.JSDOM.fromURL(url).dom.window.document.getElementById('fondoColor-1').textContent.trim());
}
myFunction();
//console.log(jsdom.JSDOM.fromURL(url));

*/


var a = fs.readFileSync('./last.json', 'utf8');
console.log(a);