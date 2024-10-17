for (var i = 0; i < 3; i++) {
    console.log(i);
}



var i = 0;
while (i < 3) {
    console.log("Elvalor actual de i es:", i);
    i++;
}



var inicio = 0;
var fin = 10;
    
while (inicio <= fin) {
    console.log("inicio: " + inicio + ", fin: " + fin);
    inicio++;
    fin--;
}

var x = 0; 
for(var i = 1; i <= 5; i++) { 
    x += i * 2; }








    for (let i = 1; i <= 10; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }