var boton = document.querySelector("button")
var parrafo = document.querySelector("body")

var agregarParrafo = function(){
parrafo.insertAdjacentHTML("beforeend", "<p>BEEP</p>")
parrafo.classList.toggle("Color")
}

boton.addEventListener("click", agregarParrafo)

