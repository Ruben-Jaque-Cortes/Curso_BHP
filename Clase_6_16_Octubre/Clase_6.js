
const persona1={
    rut: "123456789-0",
    nombre: "Pepe",
    apellido: "Lopez",
    cuentaBancaria: {
        banco: "Banco de Chile",
        tipoCuenta: "Cuenta Corriente",
        saldo: 1000
    }
}

const persona2={
    rut: "234567890-1",
    nombre: "Flor",
    apellido: "Fernandez",
    cuentaBancaria: {
        banco: "Banco Itau",
        tipoCuenta: "Cuenta Corriente",
        saldo: 500
    }
}


const persona3={
    rut: "345678901-2",
    nombre: "Gloria",
    apellido: "Gordoñez",
    cuentaBancaria: {
        banco: "Banco Santander",
        tipoCuenta: "Cuenta Corriente",
        saldo: 2000
    }
}


/* Transacciones Basicas */

/* Retiro de Dinero */

persona1.cuentaBancaria.saldo -=500


/* Ingreso Dinero */
persona2.cuentaBancaria.saldo +=1000


function versaldo(persona) {
    console.log(persona.cuentaBancaria.saldo);
}

function depositar( persona,monto){
    persona.cuentaBancaria.saldo += monto;
}



versaldo(persona1);
depositar(persona1, 500);
versaldo(persona1);
depositar(persona2,1000)
versaldo(persona2);



const transferir = (personaOrigen, personaDestino, monto) => {
    valor = 550
    console.log(valor);
    personaOrigen.cuentaBancaria.saldo -= monto;
    personaDestino.cuentaBancaria.saldo +=monto;
    var valor = 500

}

transferir(persona1,persona2,500)



