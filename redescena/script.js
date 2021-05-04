const jsdom = require("jsdom");
const fs = require('fs');

var url = "https://www.redescena.net/companias/listado.php?&tipo=avanzado&start="

console.log("arrrrrrancamion")
var start = 10;
var baseDeDatos = [];
let writer = fs.createWriteStream('./last.txt') 

setInterval(function() {
    
    const A = jsdom.JSDOM.fromURL(url + start);
    A.then((dom) => {
        bokita = dom.window.document.getElementsByClassName("caja_listado");
        for (var i = 0; i < 10; i++) {
            var data = bokita[i].textContent.trim().replace(/\t/g, '');
            // baseDeDatos.push(data);
            writer.write(data)
        }
        start = start + 10;
        console.log(start)
        if (start == 8440) {
            console.log("listo");
            process.exit();
        }
    })
    
}, 600)
    

// .textContent.trim().replace(/\t/g, '').replace("Compañía", "")
// fs.writeFile("./last.txt", data, "utf-8", function (err) {
//     if (err) return console.log(err);
// })


