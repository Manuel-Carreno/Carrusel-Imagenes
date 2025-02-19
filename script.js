const imagenes = document.querySelectorAll(".imagenes img");
const botonPrev = document.getElementById("prev");
const botonNext = document.getElementById("next");

let actual = 0; 


function cambiarImagen() {
    imagenes.forEach(img => img.style.display = "none");
     
    imagenes[actual].style.display = "block";

    botonPrev.disabled = actual === 0;
    botonNext.disabled = actual === imagenes.length - 1;
}

botonPrev.addEventListener("click", () => {
    if (actual > 0) {
        actual--;
        cambiarImagen();
    }
});

botonNext.addEventListener("click", () => {
    if (actual < imagenes.length - 1) {
        actual++;
        cambiarImagen();
    }
});


cambiarImagen();   

