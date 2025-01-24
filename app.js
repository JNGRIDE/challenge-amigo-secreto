// Array para almacenar los nombres de amigos
let amigos = [];
// Array para almacenar los amigos que ya han sido sorteados
let amigosSorteados = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor ingresado en el campo de texto
    const nombreAmigo = document.getElementById('amigo').value.trim();

    // Validar que el nombre no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }

    // Añadir el nombre al array 'amigos'
    amigos.push(nombreAmigo);

    // Limpiar el campo de texto después de agregar
    document.getElementById('amigo').value = '';

    // Actualizar la lista visible de amigos en la página
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    // Limpiar la lista antes de actualizarla
    listaAmigos.innerHTML = '';
    
    // Recorrer el array de amigos para generar los elementos de la lista
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo al azar sin repetir
function sortearAmigo() {
    // Verificar si hay amigos en la lista antes de sortear
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Si todos los amigos ya han sido sorteados
    if (amigosSorteados.length === amigos.length) {
        document.getElementById('resultado').innerHTML = '<li>Se han sorteado todos los amigos.</li>';
        amigos = []; // Borrar todos los amigos de la lista
        amigosSorteados = []; // Resetear la lista de amigos sorteados
        actualizarListaAmigos(); // Actualizar la vista para mostrar la lista vacía
        return;
    }

    // Seleccionar un amigo que aún no haya sido sorteado
    do {
        var indiceAleatorio = Math.floor(Math.random() * amigos.length);
    } while (amigosSorteados.includes(amigos[indiceAleatorio]));

    const amigoSorteado = amigos[indiceAleatorio];

    // Añadir el amigo sorteado a la lista de sorteados
    amigosSorteados.push(amigoSorteado);

    // Mostrar el resultado en la página
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`;
}

// Eventos opcionales si quisieras manejar el submit del formulario
document.addEventListener('DOMContentLoaded', (event) => {
    // Aquí podrías añadir más lógica de inicio si fuera necesario
});