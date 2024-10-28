/* Para que se genere la alerta al momento de precionar cerrar seción */
const cerrar = () => {
    alert("Sesión Cerrada Correctamente");
}


// Selecciona todos los botones usando querySelectorAll
const cambiocolor = document.querySelectorAll('.btncentral');

cambiocolor.forEach((boton) => {

    /* Recorre cada botón y agrega un listener para el evento click */

    boton.addEventListener('click', () => {

        /* Cambia la clase del botón al que se ha hecho clic */
        boton.classList.toggle('cambioColor');
    });
});



const darlike = (element) => {

    /* Elemento padre que contiene la imagen del like y el contador */
    const parent = element.parentElement;


    /* Busca el párrafo donde se muestra el contador de likes */
    const likeCounter = parent.querySelector("p");


    /* Se obtiene el valor actal */
    let num = parseInt(likeCounter.dataset.like);


    num++; /* Incrementa el contador */

    // Actualiza el data-attribute y el texto mostrado
    likeCounter.dataset.like = num;
    likeCounter.innerHTML = `${num}`;

}

