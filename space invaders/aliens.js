function Alien(x,y) {
    this.x = x;
    this.y = y;
    this.show = function() {
        ctx.fillRect(x, y, scl, scl)
    }    
}