

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = canvas.width;
cuantosAliens = 5;
ship = new Ship;
aliens = [];
for (i = 0; i < cuantosAliens; i++) {
    aliens[i] = new Alien(i*(canvas.width/cuantosAliens), 50)
}
function draw() {
    ctx.clearRect(0,0,canvas.width, canvas.height)
    ship.show();
    ship.move();
    for (i = 0; i < aliens.length; i++) {
        aliens[i].show();
    }
}
setInterval(draw, 100)