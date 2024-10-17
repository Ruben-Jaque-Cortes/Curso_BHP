
/* Imprimir pares del 1 al 30: Usando un bucle, escribe un código que imprima todos los números pares del 1 al 30. ¡Veamos si puedes resolverlo! */

for(var i = 1; i <= 30; i++){
    if( i%2 === 0){
        x += i;
        console.log(i);
    }

}

/* Imprimir múltiplos de 4 en orden descendente: Utilizando un bucle, escribe un código que 
imprima todos los números que sean múltiplos de 4 en orden descendente, desde 100 hasta 0. ¡Inténtalo! */


for(var i = 1; i <= 25; i++){
    x = i*4;
    console.log(x);
}

/* Imprime la secuencia: Esta vez, queremos imprimir una secuencia un poco diferente. 
Utiliza un bucle para imprimir los siguientes valores: 10, 7, 4, 1, -2, -5. */

var x = 13
while( x >-5){
    x -=3;
    console.log(x);
}


/* O TAMBIEN SE PUEDE DE ESTA FORMA */

for( var i =10; i>=-5; i -= 3){
    console.log("Este es el otro Resultado",i);

}


/*Suma todos los números pares del 1 al 50: Utiliza un bucle para sumar todos los 
números pares del 1 hasta el 50 y muestra el resultado de la suma con console log. */

suma = 0

for(var i = 1; i <= 25; i++){
    if(i%2 === 0){
    suma += i;}
}
console.log(suma);


/* Factorial: Para este último desafío, necesitamos multiplicar todos los números del 1 al 20. 
Es decir, 1 * 2 * 3 * … * 18 * 19 * 20. ¿Puedes calcular el producto final? */


suma = 1

for(var i = 1; i <= 20; i++){
    suma *= i;
}
console.log(suma);

