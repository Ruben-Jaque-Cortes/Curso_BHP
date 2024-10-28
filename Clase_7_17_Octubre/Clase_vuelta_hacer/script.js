
function darclick(element){
    console.log(element);
    element.style.backgroundColor = "red"
}

function mauseover(element){
    console.log(element);

    document.body.style.overflow = "hidden";
    element.addEventListener("mouseleave", () =>{
        document.body.style.overflow = "auto"
    })


    let scale = 1;
    element.addEventListener('wheel', (e) => {
        console.log(e);
        console.log(e.wheelDelta);

        if(e.wheelDelta < 0){
            scale -= 0.1;
            element.style.transform = `scale(${scale})`;
        }
        else{
            scale +=0.1
            element.style.transform = `scale(${scale})`;
        }
        
    })
    
}









