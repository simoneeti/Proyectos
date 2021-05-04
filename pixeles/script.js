canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx = canvas.getContext("2d");
scl = 5;
num = 1;




function drawPixeles() {
    for (var i = 0; i < canvas.width; i += scl) {
        for (var yi = 0; yi < canvas.height; yi += scl) {  
            ctx.fillStyle = `#${((i + yi) * num).toString(16)}`

            ctx.fillRect(i, yi, scl, scl);
            num++;
        }
    }
}
function draw() {
    drawPixeles();
}
setInterval(draw, 200)