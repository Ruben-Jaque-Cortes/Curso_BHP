// Obtenemos el botón por su id (ejemplo de tema anterior)
var cambiar = document.getElementById("cambiardef");

// Agregamos un evento 'click' al botón
cambiar.addEventListener("click", function() {
    // Cambiamos el contenido del botón utilizando this y innerText
    this.innerText = "Cerrar Sesión";
});



// OCULTAR BOTON DE AGREGAR DEFICIÓN
var addButton = document.getElementById("botondesaparecer");

// Añadir un evento click al botón
addButton.addEventListener("click", function() {
    // Ocultar el botón al hacer clic
    this.style.display = "none";
});



// Seleccionar todos los botones con la clase "boton"
const buttons = document.querySelectorAll(".boton");

// Agregar evento a cada botón
buttons.forEach(button => {
    button.addEventListener("click", function() {
        // Obtener el texto del título (h2) justo antes del botón
        const title = this.parentElement.querySelector("h2").textContent;
        // Mostrar una alerta con el título correspondiente
        alert("Te gustó la definición de: " + title);
    });
});




// Seleccionar todos los botones con la clase "boton"
var likes = document.querySelectorAll(".boton");

// Agregar evento a cada botón
likes.forEach(button => {
    button.addEventListener("click", function() {
        // Obtener el span que muestra el conteo de likes, que es el siguiente elemento
        var likeSpan = this.nextElementSibling; // El siguiente elemento es el span
        // Convertir el conteo actual a un número
        let like = parseInt(likeSpan.textContent) || 0; // Asegurarse de que es un número
        // Incrementar el conteo
        like++;
        // Actualizar el texto del span con el nuevo conteo
        likeSpan.textContent = like + " Likes";
    });
});














