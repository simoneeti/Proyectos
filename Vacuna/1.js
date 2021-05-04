var jsdom = require("jsdom");

var url = 'https://www.buenosaires.gob.ar/coronavirus/vacunacion-covid-19/personal-de-salud';

jsdom.JSDOM.fromURL(url)

    .then(function (dom) {
        console.log(dom.window.document.getElementById('fondoColor-1').textContent.trim())
    });
