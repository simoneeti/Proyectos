var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
i = 0;
j = 0;

setInterval(function() {update()}, 10);

function update() {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height)
    drawRect(i, j);
    ++i;
    i %= myCanvas.width;

}
function drawRect(x, y){ctx.fillRect(x, y,50,50)};


function tortillita() {
    for (i = 0; i < 10; i++) {
        console.log(i);
        i == 9 ? putivuelta() : console.log("i todo piola");
    }
}
function putivuelta() {
    for (i = 9; i == 0; i--) {
        console.log(i);
        i == 0 ? tortillita() : console.log("vueltita la egresada");
    }
}

tortillita();
putivuelta();