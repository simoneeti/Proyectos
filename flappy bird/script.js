var canvas = document.getElementById("myCanvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var ctx = canvas.getContext("2d");

var personajeAlto = 30;
var personajeAncho = 30;
xPersonaje = canvas.width/2;
yPersonaje = canvas.height/2;
spacePressed = false;
xColumnas = canvas.width;
anchoColumnas = 40;
blanco = canvas.height/3;
var counter = 0;
ejecutado = false;
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
yBlanco = getRndInteger(300 - blanco, canvas.height - 300); 


function drawPersonaje() {
    ctx.fillStyle = "black";
    ctx.fillRect(xPersonaje - personajeAncho/2, yPersonaje - personajeAlto/2, personajeAlto, personajeAncho);
}
function drawColumnas() {
     
    ctx.fillStyle = "black";
    ctx.fillRect(xColumnas - anchoColumnas, 0, anchoColumnas, canvas.height);
    ctx.fillStyle = "white";
    ctx.fillRect(xColumnas - anchoColumnas, yBlanco, anchoColumnas, blanco)


}

function draw() {
    ctx.clearRect(0,0, canvas.width, canvas.height)
    drawColumnas();
    drawPersonaje();
    ctx.font = "30px Arial";
    ctx.fillText(counter, 10, 50);
    if (spacePressed == false) {
        yPersonaje = yPersonaje + 4;
    } else {
        yPersonaje = yPersonaje - 15;
    }
    xColumnas = xColumnas - 2;
    if (xColumnas == 0) {
        xColumnas = canvas.width - anchoColumnas;
        yBlanco = getRndInteger(300 - blanco, canvas.height - 300); 
        ejecutado = false;
    }
    if (yPersonaje > canvas.height) {
        document.location.reload();
        counter = 0;
    }
    if (xColumnas < canvas.width/2 + personajeAncho && xColumnas > canvas.width/2 - personajeAncho ) {
        if (yPersonaje < yBlanco || yPersonaje >    yBlanco + blanco) {
            document.location.reload();
            counter = 0;
        }   else if (ejecutado == false) {
            counter++;
            ejecutado = true;
        }
    }
    
}
setInterval(draw, 10);

document.addEventListener("keydown", spaceDown)
document.addEventListener("keyup", spaceUp)
function spaceDown(e) {
    if (e.keyCode == 32) {
        spacePressed = true;
    }
}
function spaceUp(e) {
    if (e.keyCode == 32) {
        spacePressed = false;
    }
}