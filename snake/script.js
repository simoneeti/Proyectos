var canvas = document.getElementById("myCanvas");
var scl = 20;
canvas.width = scl * 25;
canvas.height = scl * 25;
var ctx = canvas.getContext("2d");
var eaten = true;


function Snake() {
    this.x = scl * Math.round((canvas.width/scl)/2 - 1);
    this.y = scl * Math.round((canvas.height/scl)/2 - 1);
    this.xspeed = 0;
    this.yspeed = 0;

    this.update = function() {
        this.x = this.x + this.xspeed*scl;
        this.y = this.y + this.yspeed*scl;
    }
    this.rules = function() {
        if (this.x == canvas.width - scl || this.x == 0) {
            this.xspeed = 0;
        }
        if (this.y == canvas.height - scl || this.y == 0) {
            this.yspeed = 0;
        }
        if (this.x == f.x && this.y == f.y) {
            eaten = true;
        }
    }
    this.show = function() {
        ctx.fillRect(this.x,this.y,scl,scl)
    }
}

var s = new Snake;

function Food() {
    this.newLocation = function() {
        if (eaten == true) {
        this.x = scl * Math.floor(Math.random() * (canvas.width/scl));
        this.y = scl * Math.floor(Math.random() * (canvas.height/scl));
        eaten = false;
    }
    }
    this.draw = function() {
        ctx.fillRect(this.x, this.y, scl, scl)
    }
}
var f = new Food;

document.addEventListener("keydown", keyDown)
function keyDown(e) {
    switch (e.keyCode) {
        case 37:
        s.xspeed = -1;
        s.yspeed = 0;
        break;
        case 38:
        s.xspeed = 0;
        s.yspeed = -1;
        break;
        case 39:
        s.xspeed = 1;
        s.yspeed = 0;
        break;
        case 40:
        s.xspeed = 0;
        s.yspeed = 1;
        break;
    }
}

function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    s.update();
    s.show();
    s.rules();
    f.newLocation();
    f.draw();
}
setInterval(draw, 100)