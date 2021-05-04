var bSuma = document.getElementById("bSuma");
var bResta = document.getElementById("bResta");
var bReset = document.getElementById("bReset");

var contador = document.querySelector("#counter")
var counter = 0;
contador.textContent = counter;

sesentaNueve = () => {
    if (counter == 69) {
        document.body.style.backgroundImage = "url('https://cdn.memegenerator.es/descargar/31381849')"
}
    else { document.body.style.backgroundImage = "none" }
}
bSuma.addEventListener("click", function () {
    counter++;
    contador.textContent = counter;
    sesentaNueve();
})
bResta.addEventListener("click", function () {
    counter--;
    contador.textContent = counter;
    sesentaNueve();
})
bReset.addEventListener("click", function () {
    counter = 0;
    contador.textContent = counter;
    sesentaNueve();
})
