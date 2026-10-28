// ---------- Ejercicio 1: pedir GET /posts y mostrarlo en la consola ----------
// ---------- Ejercicio 2: mostrar las primeras 10 publicaciones ----------

// JSONPlaceholder devuelve texto de relleno en "latín" (lorem ipsum).
// Para verlo en español, usamos estas frases en lugar de ese texto.
// Si querés ver los datos originales de la API, cambiá true por false.
const MOSTRAR_EN_ESPANOL = true;

const titulosEs = [
  "Mi primer día en la escuela",
  "Cómo preparar un buen mate",
  "Mi equipo ganó el domingo",
  "Recomiendo esta serie",
  "Un viaje a las sierras",
  "Consejos para estudiar mejor",
  "La música que escucho hoy",
  "Receta fácil de milanesas",
  "Lo que aprendí de programación",
  "Un fin de semana tranquilo"
];

const textosEs = [
  "Hoy conocí a mis compañeros nuevos y la jornada fue muy divertida.",
  "El secreto es no dejar que el agua hierva y cebar despacio.",
  "Fue un partido muy parejo, pero al final festejamos con los amigos.",
  "La vi completa en un fin de semana y me dejó pensando mucho.",
  "Caminamos por los cerros y sacamos fotos del paisaje todo el día.",
  "Hay que estudiar en un lugar silencioso y hacer pausas cortas.",
  "Escucho de todo un poco, pero siempre vuelvo a mis bandas favoritas.",
  "Se necesitan carne, huevo y pan rallado. Después, a freír o al horno.",
  "Con HTML, CSS y JavaScript ya puedo armar una página que usa datos reales.",
  "Dormí hasta tarde, almorcé en familia y a la tarde miré una película."
];

async function cargarPublicaciones() {
  // Pedimos los datos al servidor
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
  const datos = await respuesta.json();

  // Ejercicio 1: ver el resultado en la consola (F12)
  console.log(datos);

  // Ejercicio 2: nos quedamos solo con las primeras 10
  const primeras = datos.slice(0, 10);

  const lista = document.getElementById("lista");

  // Por cada publicación creamos una tarjeta con título y texto
  primeras.forEach(function (post, i) {
    let titulo = post.title;
    let texto = post.body;

    if (MOSTRAR_EN_ESPANOL) {
      titulo = titulosEs[i];
      texto = textosEs[i];
    }

    lista.innerHTML += `
      <div class="tarjeta">
        <h3>${titulo}</h3>
        <p>${texto}</p>
      </div>
    `;
  });
}

// ---------- Ejercicio 4: sección "Usuarios" con GET /users ----------

async function cargarUsuarios() {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
  const usuarios = await respuesta.json();

  const contenedor = document.getElementById("usuarios");

  usuarios.forEach(function (usuario) {
    contenedor.innerHTML += `
      <div class="tarjeta">
        <h3>${usuario.name}</h3>
        <p>Email: ${usuario.email}</p>
        <p>Ciudad: ${usuario.address.city}</p>
      </div>
    `;
  });
}

// Ejecutamos las dos funciones
cargarPublicaciones();
cargarUsuarios();


/* ---------- Preguntas conceptuales ----------

1. En esta práctica, ¿quién cumple el rol de cliente y quién el de servidor?
   El cliente es el navegador, con nuestra página y el código app.js, que
   hace los pedidos. El servidor es JSONPlaceholder, que recibe el pedido
   y nos responde con los datos.

2. ¿Qué método HTTP usaste para pedir las publicaciones?
   Usé el método GET, que sirve para pedir o leer datos.
   (Completar la segunda parte con el enunciado completo: la foto se corta
   en "¿Qué método usarías para...". Si pregunta por crear una publicación
   nueva, la respuesta sería POST, que sirve para enviar datos nuevos
   al servidor.)

*/