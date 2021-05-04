var jsdom = require('jsdom');
const { JSDOM } = jsdom;
var url = "https://www.buenosaires.gob.ar/coronavirus/vacunacion-covid-19/personal-de-salud";
//var a = "<html><body> <h1>My First Heading</h1><p>My first paragraph.</p></body ></html >"
const dom = JSDOM.fromURL(url)
    .then(function (dom) {
    console.log(dom.window.document.querySelector('body').textContent);
};

console.log(dom);




//console.log(files);
//console.log(pathObj);
//console.log(jsdom);
//const dom = new JSDOM.fromFile('.\\gcba.html');
//if (dom.window.document) {
//}
//const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
//console.log(dom.window.document); // "Hello world"
/*const dom = new JSDOM(``, {
    url: "https://1337x.to/",
    contentType: "text/html",
    includeNodeLocations: true,
    storageQuota: 10000000
});
const path = require('path');
var pathObj = path.parse(__filename);
const fs = require('fs');
var files = fs.readdirSync('./');

*/