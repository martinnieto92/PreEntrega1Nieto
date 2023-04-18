alert("Bienvenido a Cerveza Korper");
let nombre = prompt("Ingrese su nombre");
alert("Bienvenido " + nombre);

let carrito = [];

function CargarunItem(){
    const nuevoItem = new Item();
    nuevoItem.estilo = prompt('Ingrese un estilo');
    nuevoItem.cantidad = prompt('Ingrese cantidad');
    nuevoItem.precio = prompt('Ingrese precio');
    carrito.push(nuevoItem);
}


const cargarItems = () => {
    let seguir;
    do {
        CargarunItem();
        seguir = prompt('Desea seguir cargando cerveza s/n')
    }while (seguir=='s')
}
    
let superTotal=0; 
function mostrarCarrito() {
    let ticket='';
    let totalTicket = 0;
        carrito.forEach((item) => {
            ticket= ticket + `nombre: ${item.estilo} \n precio: ${item.precio} \n cantidad: ${item.cantidad} \n subtotal: ${item.subTotal()}\n\n`;
        });
        totalTicket= carrito.reduce((total,item) => {
            return total + item.subTotal();
        },0);
        superTotal=totalTicket;

        alert(ticket + `Total: ${totalTicket}`);
}

cargarItems();
mostrarCarrito();

// Mostrar el costo total de la compra al usuario
const formaDePago = prompt("¿Cómo desea pagar? 1)Efectivo (10%off) o 2)tarjeta?");
//Forma de pago
if (formaDePago== 1){
    const precioConDescuento = superTotal * 0.9; // Aplica un 10% de descuento
    alert("El precio final con descuento es de $" +precioConDescuento);
} else if (formaDePago== 2) {
    const cantidadDeCuotas = parseInt(prompt("¿En cuántas cuotas desea pagar? (máximo 3 cuotas)"));
    if (cantidadDeCuotas <= 0 || cantidadDeCuotas > 3) {
        alert("La cantidad de cuotas seleccionada no es válida.");
        } else {
            const precioPorCuota = superTotal / cantidadDeCuotas;
            alert("El precio final es de $"+superTotal+", en "+cantidadDeCuotas+ " cuotas de $"+precioPorCuota+ " cada una.");
        }   
}else {
    alert("La forma de pago seleccionada no es válida.");
}


