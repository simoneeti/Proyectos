scl = 20;
left_arrow = false;
right_arrow = false;
document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);
function keydown(e) {
    if (e.keyCode == 37) {
        left_arrow = true;
    }
    if (e.keyCode == 39) {
        right_arrow = true;
    }
}
function keyup(e) {
    if (e.keyCode == 37) {
        left_arrow = false;
    }
    if (e.keyCode == 39) {
        right_arrow = false;
    }
}

function Ship() {
    this.x = canvas.width/2;
    this.y = canvas.height - 50;
    this.xspeed = scl;
    this.show = function () {
        ctx.fillRect(this.x - scl*3/2,this.y, scl*3,scl)
    }
    this.move = function() {
        if (left_arrow) {
            this.x += -this.xspeed;
        }
        if (right_arrow) {
            this.x += this.xspeed;
        }
    }
}