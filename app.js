// Función para crear flores con mensaje visual atractivo
function createFlower() {
    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.innerText = '🌸';
    flower.style.top = Math.random() * window.innerHeight + 'px';
    flower.style.left = Math.random() * window.innerWidth + 'px';
    flower.onclick = () => showMessage("Te amo 💖");
    document.body.appendChild(flower);
    setTimeout(() => flower.remove(), 10000); // La flor desaparece después de 10 segundos
}

// Función para mostrar el mensaje de manera elegante
function showMessage(text) {
    const messageContainer = document.createElement('div');
    messageContainer.className = 'message-box';
    messageContainer.innerHTML = `<p>${text}</p>`;
    
    document.body.appendChild(messageContainer);

    // Desvanecer el mensaje después de 2 segundos
    setTimeout(() => {
        messageContainer.style.opacity = '0';
        setTimeout(() => messageContainer.remove(), 1000);
    }, 2000);
}

setInterval(createFlower, 60000); // Crea una flor cada minuto


// Carrusel de imágenes con botones y temporizador automático
let imagenes = [
    {
        "url": "Assets/TonyBillieEilish.jpg",
        "nombre": "Enero",
        "descripcion": "Este es el proyecto 01 fue desarrollado para un video de youtube. Si te gusta el contenido dale like y suscribete"
    },
    {
        "url": "Assets/TonyCopa.png",
        "nombre": "Febrero",
        "descripcion": "Hola a todos este es el proyecto02 y fue desarrollado para un video de youtube. Si te gusta el contenido dale like y suscribete"
    },
    {
        "url": "Assets/TonyLoquillo.jpeg",
        "nombre": "Marzo",
        "descripcion": "Este proyecto, es el 03 y fue desarrollado para un video de youtube. Si te gusta el contenido dale like y suscribete"
    }
]

let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto');
let actual = 0;

function actualizarCarrusel() {
    imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`;
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `;
    posicionCarrusel();
}

atras.addEventListener('click', function(){
    actual -= 1;
    if (actual == -1) {
        actual = imagenes.length - 1;
    }
    actualizarCarrusel();
    reiniciarTemporizador();
});  

adelante.addEventListener('click', function(){
    actual += 1;
    if (actual == imagenes.length) {
        actual = 0;
    }
    actualizarCarrusel();
    reiniciarTemporizador();
});  

function posicionCarrusel() {
    puntos.innerHTML = "";
    for (var i = 0; i < imagenes.length; i++) {
        if (i == actual) {
            puntos.innerHTML += '<p class="bold">.<p>';
        } else {
            puntos.innerHTML += '<p>.<p>';
        }
    } 
}

// Temporizador para cambiar la imagen cada 40 segundos
let temporizador = setInterval(() => {
    actual = (actual + 1) % imagenes.length;
    actualizarCarrusel();
}, 40000);

function reiniciarTemporizador() {
    clearInterval(temporizador);
    temporizador = setInterval(() => {
        actual = (actual + 1) % imagenes.length;
        actualizarCarrusel();
    }, 30000);
}

posicionCarrusel();
