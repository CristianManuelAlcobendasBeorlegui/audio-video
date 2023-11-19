// === MODO ESTRICTO === //
"use strict";

// === ELEMENETOS HTML === //
const videoMetro = document.getElementById("videoMetro");
const btnCapturarFotograma = document.getElementById("btnCapturarFotograma");
const canvasFotogramaVideoActual = document.getElementById("canvasFotogramaVideoActual");

// === EVENTOS === //
btnCapturarFotograma.addEventListener("click", capturarFotograma, false);

// === METODOS === //

/** 
 * Procedimiento que permite capturar el fotograma actual del video con ID "videoMetro".
 * */
function capturarFotograma() {
    // Adaptamos la medida del elemento "canvas" con la anchura y la altura del video.
    canvasFotogramaVideoActual.width = videoMetro.videoWidth;
    canvasFotogramaVideoActual.height = videoMetro.videoHeight;
    // Capturamos el fotograma actual y lo mostramos en la etiqueta "canvas".
    canvasFotogramaVideoActual.getContext("2d").drawImage(videoMetro, 0, 0, videoMetro.videoWidth, videoMetro.videoHeight);
    // Convertimos el fotograma de video actual a una escala de negro y blanco.
    canvasFotogramaVideoActual.style.filter = 'grayscale(1)';
}