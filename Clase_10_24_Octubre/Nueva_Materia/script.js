

/* Funcion asincronica */
const laodcategories = async () => {

    /* Peticion a la API */
    const response = await fetch("https://swapi.dev/api/");
    const data = await response.json();
    console.log(data);

    const select = document.getElementById('categoriesIpt');
    const categories = Object.keys(data);

    categories.forEach((category) =>{
        const opt = '<option value = "${data[categories]}">${categories} </option>'
        select.innerHTML +=opt;
    })
    
}

/* Promesas then */

const 







laodcategories();