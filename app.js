// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Objetivo: Desarrollar la logica de un juego de amigos secretos.
let amigos=[];

function agregarAmigo() {
    let nombres = document.getElementById("amigo").value
    console.log(nombres)
    if (nombres === "") {
        alert("Por favor, inserte un nombre");
    } else {
        amigos.push(nombres);
    }
    limpiarLista();
}

function limpiarLista() {
    let valorLista = document.querySelector("#amigo");
    valorLista.value ="";
}