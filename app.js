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
        actualizarLista();
    }
    limpiarCaja();

    return;
}

function actualizarLista() {
    let ElementoLista = document.getElementById("listaAmigos")
    ElementoLista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        ElementoLista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos amigos para realizar el sorteo");
        return;
    }

    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = "";

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    resultadoElemento.innerHTML = `<li> El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}



function limpiarCaja() {
    let valorLista = document.querySelector("#amigo");
    valorLista.value ="";
}
