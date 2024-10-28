/* 
var sandwich = {
    pan: "masa madre",
    proteína: "asado",
    queso: "queso suizo lacey",
    salsas: ["lechuga romana", "tomates reliquia", "salsa de rábano"]
};
    
console.log(sandwich); */


function sandwichFactory(pan, proteína, queso, salsas) {
    var sandwich = {};
    sandwich.pan = pan;
    sandwich.proteína = proteína;
    sandwich.queso = queso;
    sandwich.salsas = salsas;
    return sandwich;
}
    
var s1 = sandwichFactory("trigo", "pavo", "provolone", ["mostaza", "cebolla frita", "rúcula"]);
console.log(s1);



function pizzaOven(tipocorteza, tiposalsa, quesos, salsas ){
    var pizza ={
        corteza: tipocorteza,
        salsa: tiposalsa,
        queso: quesos,
        "Salsas y adheridos": salsas
    };
    return pizza;
}

var pizza1 = pizzaOven("estilo Chicago","Tradicional","mozzarela",["peperoni", "salchicha"]);
console.log(pizza1);

var pizza2 = pizzaOven("Lanzada a Mano","marinara",["mozzarela","Feta"],["Chanpiñones", "Aceitunas", "salchicha"]);
console.log(pizza2);

var pizza3 = pizzaOven("Delgada","Tradicional","Triple Queso",["Jamon", "salchicha","Aceitunas","Peperoni"]);
console.log(pizza3);

