// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//variables
let amigos = [];


//query selector
let input = document.querySelector('#amigo');
let boton = document.querySelector('.button-add');
let listaAmigos = document.querySelector("#listaAmigos");
let botonSotear = document.querySelector(".button-draw");
let resultado = document.querySelector("#resultado");


//functions
function agregarAmigo() {
    let nombre = input.value.trim();

    if (nombre) {
        amigos.push(nombre);
        limpiarCampo();
        actualizarLista();
    } else {
        const alerta = document.createElement('P');
        alerta.classList.add("error-message");
        alerta.innerHTML = `El campo no puede estar vacío`;

        listaAmigos.appendChild(alerta);
        setTimeout(() => {
            alerta.remove();
        }, 2500);
    }
}

function sortearAmigo(){
    if (amigos.length === 0) {
        const alerta = document.createElement('P');
        alerta.classList.add("error-message");
        alerta.innerHTML = `Debe agregar al menos un amigo `;

        resultado.appendChild(alerta);
        setTimeout(() => {
            alerta.remove();
        }, 2500);
    }

    let nombreAleatorio = Math.floor(Math.random() * amigos.length);
    let nombreSorteado =  amigos[nombreAleatorio];

    resultado.innerHTML = `<li>El nombre sorteado es ${nombreSorteado}</li>`;
}

    function actualizarLista() {
        listaAmigos.innerHTML = amigos.map(nombre => `<li>${nombre}</li>`).join('');
    }


    function limpiarCampo() {
        input.value = '';
    }


