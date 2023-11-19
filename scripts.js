// === MODO ESTRICTO === //
"use strict";

// === ELEMENTOS HTML === //
const audio = document.getElementById("player");
const vOlas = document.querySelectorAll(".wave");
const imgBtnReproducirVideo = document.getElementById("imgBtnReproducirVideo");
const imgBtnPararVideo = document.getElementById("imgBtnPararVideo");
const imgBtnReiniciarVideo = document.getElementById("imgBtnReiniciarVideo");
const rangeVolumen = document.getElementById("rangeVolumen");
const volumenActual = document.getElementById("volumenActual");

// === EVENTOS === //
window.addEventListener("load", init, false);
imgBtnReproducirVideo.addEventListener("click", reproducirAudio, false);
imgBtnPararVideo.addEventListener("click", pararAudio, false);
imgBtnReiniciarVideo.addEventListener("click", reiniciarAudio, false);
rangeVolumen.addEventListener("input", () => cambiarVolumen(rangeVolumen.value), false);

// === METODOS === //

/** 
 * Procedimiento que se ejecuta cuando se termina de ejecutar la pagina HTML.
 * */
function init() {
    // Inicializamos el volumen al que se reproducira el audio.
    rangeVolumen.value = 50;
    cambiarVolumen(rangeVolumen.value);
    volumenActual.innerText = rangeVolumen.value;
}

/** 
 * Proceso que permite iniciar la animacion junto con el audio del efecto de olas marinas
 * del HTML.
 * */
function reproducirAudio() {
    // Variables
    let i;

    // Reproducimos el audio.
    audio.play();

    // Iniciamos la animacion de las olas marinas del HTML.
    for(i = 0; i < vOlas.length; i++) {
        vOlas[i].classList.add("playing");
    }
}

/** 
 * Proceso que permite parar la animacion junto con el audio del efecto de olas marinas
 * del HTML.
 * */
function pararAudio() {
    // Variables
    let i;
    
    // Ponemos el audio en pausa.
    audio.pause();

    // Detenemos la animacion de las olas marinas del HTML.
    for(i = 0; i < vOlas.length; i++) {
        vOlas[i].classList.remove("playing");
    }
}

/**
 * Proceso que permite reiniciar el audio de la animacion de las olas HTML.
 * */
function reiniciarAudio() {
    // Hacemos que el audio comienze a reproducirse desde el minuto 0:00.
    audio.currentTime = 0;
}

/** 
 * Procedimiento que assignara un valor de tipo numerico que indica al reproductor 
 * el volumen al que tiene que estar el audio.
 * */
function cambiarVolumen(volumen) {
    // Comprobamos que el volumen sea equivalente a un valor numerico.
    if(!isNaN(volumen)) {
        // Comprobamos que el valor de "volumen" NO se encuentre entre 0 y 100.
        if(volumen < 0) {
            volumen = 0;
        } else if (volumen > 100) {
            volumen = 100;
        }
        volumenActual.innerText = volumen;

        // Indicamos el volumen sobre el que se quiere reproducir el audio.
        audio.volume = volumen/100;
    
    }
}