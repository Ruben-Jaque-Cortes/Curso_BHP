


function handleclick(elemento) {
    console.log(elemento);
    elemento.style.backgroundColor = "red";
}


function handleMouseOver(elemento) {

    console.log(elemento);
    let scale = 1
    elemento.addEventListener("wheel", (e) => {
        console.log(e);
        console.log(e.wheelDelta);
        if(e.wheelDelta <0){
            scale -= 0.1;
            elemento.style.transform = 'scale(${scale})';
        }
        else if (e.wheelDelta >0) {
            scale += 0.1;
            elemento.style.transform = 'scale(${scale})';
        }

    });


}





