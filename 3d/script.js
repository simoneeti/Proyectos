var canvas = document.getElementById("myCanvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
var ctx = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
var xRect = canvas.width/2;
var largoPaleta = 200;
rightPressed = false;
leftPressed = false;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}
function drawPaleta() {
    ctx.beginPath();
    ctx.fillRect(xRect - largoPaleta/2, canvas.height - 30, largoPaleta, 20);
    ctx.fillStile = "green";
    ctx.fill();
    ctx.closePath();
}
function draw() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawBall();
    drawPaleta();
    x += dx;
    y += dy;

    if (dy + y < ballRadius/2) {
        dy = -dy; 
    } else if (dy + y > canvas.height - ballRadius/2) {
        if (x > xRect && x < x + largoPaleta) {
            dy = -dy;
        } else {
        document.location.reload();
        }
    }
    if (dx + x < ballRadius/2 || dx + x > canvas.width - ballRadius/2) {
        dx = -dx;
    }
    if (xRect + largoPaleta/2 > canvas.width) {
        rightPressed = false;
    }
    if (xRect - largoPaleta/2 == 0) {
        leftPressed = false;
    }
    if (rightPressed) {
        xRect += 5;
    }
    if (leftPressed) {
        xRect += -5;
    }



}
document.addEventListener("keydown", downEventHandler, false);
document.addEventListener("keyup", upEventHandler, false);
function downEventHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
        console.log("a")
    }
    if (e.keyCode == 37) {
        leftPressed = true;
        console.log("a")

    }
}
function upEventHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
        console.log("a")

    }
    if (e.keyCode == 37) {
        leftPressed = false;
        console.log("a")

    }
}
setInterval(draw, 10)
