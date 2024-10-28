
document.addEventListener("DOMContentLoaded", () => {
    const boton = document.querySelectorAll("button");

    boton.forEach(button => {
        button.addEventListener("click", () => {
            const parent = button.parentElement;
            const megusta = parent.querySelector("p");
            let num = parseInt(megusta.dataset.like);
            num++;

            megusta.dataset.like = num;
            megusta.innerHTML = `${num} like(s)`;

        })
    })
})
