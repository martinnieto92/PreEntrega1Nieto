alert("Bienvenido a Cerveza Korper");
let nombre = prompt("Ingrese su nombre");
alert("Bienvenido " + nombre);

let edad = prompt("Ingrese su edad");

if (edad >= 18) {
    alert("Puede continuar");
    let precioRubia = 100; // precio de la cerveza rubia
    let precioRoja = 120; // precio de la cerveza roja
    let precioNegra = 140; // precio de la cerveza negra
    let total = 0; // variable para almacenar el costo total
    
    // Solicitar al usuario la cantidad de cerveza que desea comprar de cada estilo
    let cantidadRubia, cantidadRoja, cantidadNegra;
    do {
        cantidadRubia = parseInt(prompt("¿Cuánta cerveza rubia desea comprar ($100)?"));
    } while (isNaN(cantidadRubia) || cantidadRubia < 0);
    do {
        cantidadRoja = parseInt(prompt("¿Cuánta cerveza roja desea comprar ($120)?"));
    } while (isNaN(cantidadRoja) || cantidadRoja < 0);
    do {
        cantidadNegra = parseInt(prompt("¿Cuánta cerveza negra desea comprar ($140)?"));
    } while (isNaN(cantidadNegra) || cantidadNegra < 0);
    
     // Calcular el costo total de la compra
    if (cantidadRubia > 0) {
       total += cantidadRubia * precioRubia;
    }
    if (cantidadRoja > 0) {
       total += cantidadRoja * precioRoja;
    }
    if (cantidadNegra > 0) {
       total += cantidadNegra * precioNegra;
    }

     // Mostrar el costo total de la compra al usuario
    alert("Ud ingreso:\n" + cantidadRubia + " rubias\n" + cantidadRoja + " rojas\n"  +cantidadNegra + " negras\n");
    alert("El costo total de su compra es de $" + total + ".");
    const formaDePago = prompt("¿Cómo desea pagar? 1)Efectivo (10%off) o 2)tarjeta?");

    //Forma de pago
    if (formaDePago== 1){
        const precioConDescuento = total * 0.9; // Aplica un 10% de descuento
        alert("El precio final con descuento es de $" +precioConDescuento);
    } else if (formaDePago== 2) {
        const cantidadDeCuotas = parseInt(prompt("¿En cuántas cuotas desea pagar? (máximo 3 cuotas)"));

        if (cantidadDeCuotas <= 0 || cantidadDeCuotas > 3) {
            alert("La cantidad de cuotas seleccionada no es válida.");
            } else {
                const precioPorCuota = total / cantidadDeCuotas;
                alert("El precio final es de $"+total+", en "+cantidadDeCuotas+ " cuotas de $"+precioPorCuota+ " cada una.");
            }   
    }else {
        alert("La forma de pago seleccionada no es válida.");
    }
} 
else { //en caso de ser menor de 18 años
    alert("Retirese");
}


